/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package model_svc

import "sync"

type ErrorResponse struct {
	Error string `json:"error"`
}

/*
Platform (~AI Platform) roughly represents an AI container + its settings.
*/
type Platform struct {
	Id            string        `json:"id"`
	Name          *string       `json:"name,omitempty"`
	Version       *int          `json:"version,omitempty"`
	Architectures Architectures `json:"architectures"`
}

func (p Platform) GetId() string {
	return p.Id
}

/* Containers by GPU/hardware platform */
type Architectures struct {
	Default Container `json:"default"`
	Cuda    Container `json:"cuda,omitempty"`
}

type Container struct {
	/* Port is the internal port of the Container */
	Port int `json:"port"`

	Image string `json:"image"`

	/* Envars passed to the container. eg.
	'DEVICES=all'
	*/
	Envars []string `json:"envars"`

	/* Keeps are paths in the container that should be persisted across restarts.
	 */
	Keeps []string `json:"keeps,omitempty"`
}

type Assets map[string]string

type Model struct {
	Id             string            `json:"id"`
	PlatformId     string            `json:"platformId"`
	Name           string            `json:"name"`
	Parameters     string            `json:"parameters"`
	Flavour        string            `json:"flavour"`
	Version        string            `json:"version"`
	Quality        string            `json:"quality"`
	Extension      string            `json:"extension"`
	FullName       string            `json:"fullName"`
	Tags           []string          `json:"tags"`
	Mirrors        []string          `json:"mirrors"`
	Size           float64           `json:"size"`
	Uncensored     bool              `json:"uncensored"`
	MaxRam         float64           `json:"maxRam"`
	Description    string            `json:"description"`
	PromptTemplate string            `json:"promptTemplate"`
	QuantComment   string            `json:"quantComment"`
	MaxBits        int               `json:"maxBits"`
	Bits           int               `json:"bits"`
	Assets         map[string]string `json:"assets"`
}

func (g Model) GetId() string {
	return g.Id
}

/* Internal type for ModelService */
type ModelState struct {
	sync.Mutex
	Answering         bool
	HasCheckerRunning bool
}

// Setter methods for each field
func (m *ModelState) SetAnswering(v bool) {
	m.Lock()
	defer m.Unlock()
	m.Answering = v
}

func (m *ModelState) SetHasCheckerRunning(v bool) {
	m.Lock()
	defer m.Unlock()
	m.HasCheckerRunning = v
}

type ModelStatus struct {
	AssetsReady bool `json:"assetsReady"`
	/* Running triggers onModelLaunch on the frontend.
	Running is true when the model is both running and answering
	- fully loaded. */
	Running bool   `json:"running"`
	Address string `json:"address"`
}

type StatusRequest struct {
	ModelId string `json:"modelId"`
}

type StatusResponse struct {
	Status *ModelStatus `json:"status"`
}

type StartRequest struct {
}

type StartResponse struct {
}

type StartDefaultRequest struct {
}

type StartDefaultResponse struct {
}

type MakeDefaultRequest struct {
}

type MakeDefaultResponse struct {
}

type ListRequest struct{}

type ListResponse struct {
	Models []*Model `json:"models,omitempty"`
}

type GetModelRequest struct {
	Id string `json:"id,omitempty"`
}

type GetModelResponse struct {
	Exists   bool      `json:"exists"`
	Model    *Model    `json:"model,omitempty"`
	Platform *Platform `json:"platform,omitempty"`
}

//
// Events
//

const EventModelReadyName = "modelReady"

type EventModelReady struct {
	ThreadId string `json:"threadId"`
}

func (e EventModelReady) Name() string {
	return EventModelReadyName
}