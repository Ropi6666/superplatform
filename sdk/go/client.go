package sdk

import (
	"net/http"
	"strings"

	client "github.com/singulatron/superplatform/clients/go"
)

type ClientFactory interface {
	Client(opts ...ClientOption) *client.APIClient
}

type ClientOption func(*client.Configuration)

func WithToken(token string) ClientOption {
	return func(cfg *client.Configuration) {
		cfg.DefaultHeader = map[string]string{
			"Authorization": "Bearer " + token,
		}
	}
}

func WithTokenFromRequest(req *http.Request) ClientOption {
	authHeader := req.Header.Get("Authorization")
	authHeader = strings.Replace(authHeader, "Bearer ", "", 1)

	return func(cfg *client.Configuration) {
		cfg.DefaultHeader = map[string]string{
			"Authorization": "Bearer " + authHeader,
		}
	}
}

func CustomHeader(key, value string) ClientOption {
	return func(cfg *client.Configuration) {
		if cfg.DefaultHeader == nil {
			cfg.DefaultHeader = make(map[string]string)
		}
		cfg.DefaultHeader[key] = value
	}
}

type APIClientFactory struct {
	url string
}

func NewApiClientFactory(url string) *APIClientFactory {
	return &APIClientFactory{
		url: url,
	}
}

func (f *APIClientFactory) Client(opts ...ClientOption) *client.APIClient {
	cfg := &client.Configuration{
		Servers: client.ServerConfigurations{
			{
				URL:         f.url,
				Description: "Default server",
			},
		},
	}

	for _, opt := range opts {
		opt(cfg)
	}

	return client.NewAPIClient(cfg)
}