/*
OpenOrch

On-premise AI platform and microservices ecosystem.

API version: 0.3.0-rc.8
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the SecretSvcListSecretsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SecretSvcListSecretsRequest{}

// SecretSvcListSecretsRequest struct for SecretSvcListSecretsRequest
type SecretSvcListSecretsRequest struct {
	Key *string `json:"key,omitempty"`
	Keys []string `json:"keys,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
}

// NewSecretSvcListSecretsRequest instantiates a new SecretSvcListSecretsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSecretSvcListSecretsRequest() *SecretSvcListSecretsRequest {
	this := SecretSvcListSecretsRequest{}
	return &this
}

// NewSecretSvcListSecretsRequestWithDefaults instantiates a new SecretSvcListSecretsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSecretSvcListSecretsRequestWithDefaults() *SecretSvcListSecretsRequest {
	this := SecretSvcListSecretsRequest{}
	return &this
}

// GetKey returns the Key field value if set, zero value otherwise.
func (o *SecretSvcListSecretsRequest) GetKey() string {
	if o == nil || IsNil(o.Key) {
		var ret string
		return ret
	}
	return *o.Key
}

// GetKeyOk returns a tuple with the Key field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SecretSvcListSecretsRequest) GetKeyOk() (*string, bool) {
	if o == nil || IsNil(o.Key) {
		return nil, false
	}
	return o.Key, true
}

// HasKey returns a boolean if a field has been set.
func (o *SecretSvcListSecretsRequest) HasKey() bool {
	if o != nil && !IsNil(o.Key) {
		return true
	}

	return false
}

// SetKey gets a reference to the given string and assigns it to the Key field.
func (o *SecretSvcListSecretsRequest) SetKey(v string) {
	o.Key = &v
}

// GetKeys returns the Keys field value if set, zero value otherwise.
func (o *SecretSvcListSecretsRequest) GetKeys() []string {
	if o == nil || IsNil(o.Keys) {
		var ret []string
		return ret
	}
	return o.Keys
}

// GetKeysOk returns a tuple with the Keys field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SecretSvcListSecretsRequest) GetKeysOk() ([]string, bool) {
	if o == nil || IsNil(o.Keys) {
		return nil, false
	}
	return o.Keys, true
}

// HasKeys returns a boolean if a field has been set.
func (o *SecretSvcListSecretsRequest) HasKeys() bool {
	if o != nil && !IsNil(o.Keys) {
		return true
	}

	return false
}

// SetKeys gets a reference to the given []string and assigns it to the Keys field.
func (o *SecretSvcListSecretsRequest) SetKeys(v []string) {
	o.Keys = v
}

// GetNamespace returns the Namespace field value if set, zero value otherwise.
func (o *SecretSvcListSecretsRequest) GetNamespace() string {
	if o == nil || IsNil(o.Namespace) {
		var ret string
		return ret
	}
	return *o.Namespace
}

// GetNamespaceOk returns a tuple with the Namespace field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SecretSvcListSecretsRequest) GetNamespaceOk() (*string, bool) {
	if o == nil || IsNil(o.Namespace) {
		return nil, false
	}
	return o.Namespace, true
}

// HasNamespace returns a boolean if a field has been set.
func (o *SecretSvcListSecretsRequest) HasNamespace() bool {
	if o != nil && !IsNil(o.Namespace) {
		return true
	}

	return false
}

// SetNamespace gets a reference to the given string and assigns it to the Namespace field.
func (o *SecretSvcListSecretsRequest) SetNamespace(v string) {
	o.Namespace = &v
}

func (o SecretSvcListSecretsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SecretSvcListSecretsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Key) {
		toSerialize["key"] = o.Key
	}
	if !IsNil(o.Keys) {
		toSerialize["keys"] = o.Keys
	}
	if !IsNil(o.Namespace) {
		toSerialize["namespace"] = o.Namespace
	}
	return toSerialize, nil
}

type NullableSecretSvcListSecretsRequest struct {
	value *SecretSvcListSecretsRequest
	isSet bool
}

func (v NullableSecretSvcListSecretsRequest) Get() *SecretSvcListSecretsRequest {
	return v.value
}

func (v *NullableSecretSvcListSecretsRequest) Set(val *SecretSvcListSecretsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableSecretSvcListSecretsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableSecretSvcListSecretsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSecretSvcListSecretsRequest(val *SecretSvcListSecretsRequest) *NullableSecretSvcListSecretsRequest {
	return &NullableSecretSvcListSecretsRequest{value: val, isSet: true}
}

func (v NullableSecretSvcListSecretsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSecretSvcListSecretsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

