/*
Superplatform

AI management and development platform.

API version: 0.2
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the RegistrySvcListNodesResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegistrySvcListNodesResponse{}

// RegistrySvcListNodesResponse struct for RegistrySvcListNodesResponse
type RegistrySvcListNodesResponse struct {
	Nodes []RegistrySvcNode `json:"nodes,omitempty"`
}

// NewRegistrySvcListNodesResponse instantiates a new RegistrySvcListNodesResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegistrySvcListNodesResponse() *RegistrySvcListNodesResponse {
	this := RegistrySvcListNodesResponse{}
	return &this
}

// NewRegistrySvcListNodesResponseWithDefaults instantiates a new RegistrySvcListNodesResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegistrySvcListNodesResponseWithDefaults() *RegistrySvcListNodesResponse {
	this := RegistrySvcListNodesResponse{}
	return &this
}

// GetNodes returns the Nodes field value if set, zero value otherwise.
func (o *RegistrySvcListNodesResponse) GetNodes() []RegistrySvcNode {
	if o == nil || IsNil(o.Nodes) {
		var ret []RegistrySvcNode
		return ret
	}
	return o.Nodes
}

// GetNodesOk returns a tuple with the Nodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrySvcListNodesResponse) GetNodesOk() ([]RegistrySvcNode, bool) {
	if o == nil || IsNil(o.Nodes) {
		return nil, false
	}
	return o.Nodes, true
}

// HasNodes returns a boolean if a field has been set.
func (o *RegistrySvcListNodesResponse) HasNodes() bool {
	if o != nil && !IsNil(o.Nodes) {
		return true
	}

	return false
}

// SetNodes gets a reference to the given []RegistrySvcNode and assigns it to the Nodes field.
func (o *RegistrySvcListNodesResponse) SetNodes(v []RegistrySvcNode) {
	o.Nodes = v
}

func (o RegistrySvcListNodesResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegistrySvcListNodesResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Nodes) {
		toSerialize["nodes"] = o.Nodes
	}
	return toSerialize, nil
}

type NullableRegistrySvcListNodesResponse struct {
	value *RegistrySvcListNodesResponse
	isSet bool
}

func (v NullableRegistrySvcListNodesResponse) Get() *RegistrySvcListNodesResponse {
	return v.value
}

func (v *NullableRegistrySvcListNodesResponse) Set(val *RegistrySvcListNodesResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableRegistrySvcListNodesResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableRegistrySvcListNodesResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegistrySvcListNodesResponse(val *RegistrySvcListNodesResponse) *NullableRegistrySvcListNodesResponse {
	return &NullableRegistrySvcListNodesResponse{value: val, isSet: true}
}

func (v NullableRegistrySvcListNodesResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegistrySvcListNodesResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

