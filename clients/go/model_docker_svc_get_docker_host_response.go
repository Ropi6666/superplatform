/*
Singulatron

AI management and development platform.

API version: 0.2
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the DockerSvcGetDockerHostResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DockerSvcGetDockerHostResponse{}

// DockerSvcGetDockerHostResponse struct for DockerSvcGetDockerHostResponse
type DockerSvcGetDockerHostResponse struct {
	Host *string `json:"host,omitempty"`
}

// NewDockerSvcGetDockerHostResponse instantiates a new DockerSvcGetDockerHostResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDockerSvcGetDockerHostResponse() *DockerSvcGetDockerHostResponse {
	this := DockerSvcGetDockerHostResponse{}
	return &this
}

// NewDockerSvcGetDockerHostResponseWithDefaults instantiates a new DockerSvcGetDockerHostResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDockerSvcGetDockerHostResponseWithDefaults() *DockerSvcGetDockerHostResponse {
	this := DockerSvcGetDockerHostResponse{}
	return &this
}

// GetHost returns the Host field value if set, zero value otherwise.
func (o *DockerSvcGetDockerHostResponse) GetHost() string {
	if o == nil || IsNil(o.Host) {
		var ret string
		return ret
	}
	return *o.Host
}

// GetHostOk returns a tuple with the Host field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DockerSvcGetDockerHostResponse) GetHostOk() (*string, bool) {
	if o == nil || IsNil(o.Host) {
		return nil, false
	}
	return o.Host, true
}

// HasHost returns a boolean if a field has been set.
func (o *DockerSvcGetDockerHostResponse) HasHost() bool {
	if o != nil && !IsNil(o.Host) {
		return true
	}

	return false
}

// SetHost gets a reference to the given string and assigns it to the Host field.
func (o *DockerSvcGetDockerHostResponse) SetHost(v string) {
	o.Host = &v
}

func (o DockerSvcGetDockerHostResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DockerSvcGetDockerHostResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Host) {
		toSerialize["host"] = o.Host
	}
	return toSerialize, nil
}

type NullableDockerSvcGetDockerHostResponse struct {
	value *DockerSvcGetDockerHostResponse
	isSet bool
}

func (v NullableDockerSvcGetDockerHostResponse) Get() *DockerSvcGetDockerHostResponse {
	return v.value
}

func (v *NullableDockerSvcGetDockerHostResponse) Set(val *DockerSvcGetDockerHostResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableDockerSvcGetDockerHostResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableDockerSvcGetDockerHostResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDockerSvcGetDockerHostResponse(val *DockerSvcGetDockerHostResponse) *NullableDockerSvcGetDockerHostResponse {
	return &NullableDockerSvcGetDockerHostResponse{value: val, isSet: true}
}

func (v NullableDockerSvcGetDockerHostResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDockerSvcGetDockerHostResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

