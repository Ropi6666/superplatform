/*
Superplatform

On-premise AI platform and microservices ecosystem.

API version: 0.2
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the RegistrySvcRepositorySpec type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegistrySvcRepositorySpec{}

// RegistrySvcRepositorySpec struct for RegistrySvcRepositorySpec
type RegistrySvcRepositorySpec struct {
	// Branch is the branch to use for the repository
	Subfolder *string `json:"subfolder,omitempty"`
	// URL is the URL to the repository
	Url string `json:"url"`
}

type _RegistrySvcRepositorySpec RegistrySvcRepositorySpec

// NewRegistrySvcRepositorySpec instantiates a new RegistrySvcRepositorySpec object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegistrySvcRepositorySpec(url string) *RegistrySvcRepositorySpec {
	this := RegistrySvcRepositorySpec{}
	this.Url = url
	return &this
}

// NewRegistrySvcRepositorySpecWithDefaults instantiates a new RegistrySvcRepositorySpec object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegistrySvcRepositorySpecWithDefaults() *RegistrySvcRepositorySpec {
	this := RegistrySvcRepositorySpec{}
	return &this
}

// GetSubfolder returns the Subfolder field value if set, zero value otherwise.
func (o *RegistrySvcRepositorySpec) GetSubfolder() string {
	if o == nil || IsNil(o.Subfolder) {
		var ret string
		return ret
	}
	return *o.Subfolder
}

// GetSubfolderOk returns a tuple with the Subfolder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegistrySvcRepositorySpec) GetSubfolderOk() (*string, bool) {
	if o == nil || IsNil(o.Subfolder) {
		return nil, false
	}
	return o.Subfolder, true
}

// HasSubfolder returns a boolean if a field has been set.
func (o *RegistrySvcRepositorySpec) HasSubfolder() bool {
	if o != nil && !IsNil(o.Subfolder) {
		return true
	}

	return false
}

// SetSubfolder gets a reference to the given string and assigns it to the Subfolder field.
func (o *RegistrySvcRepositorySpec) SetSubfolder(v string) {
	o.Subfolder = &v
}

// GetUrl returns the Url field value
func (o *RegistrySvcRepositorySpec) GetUrl() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Url
}

// GetUrlOk returns a tuple with the Url field value
// and a boolean to check if the value has been set.
func (o *RegistrySvcRepositorySpec) GetUrlOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Url, true
}

// SetUrl sets field value
func (o *RegistrySvcRepositorySpec) SetUrl(v string) {
	o.Url = v
}

func (o RegistrySvcRepositorySpec) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegistrySvcRepositorySpec) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Subfolder) {
		toSerialize["subfolder"] = o.Subfolder
	}
	toSerialize["url"] = o.Url
	return toSerialize, nil
}

func (o *RegistrySvcRepositorySpec) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"url",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varRegistrySvcRepositorySpec := _RegistrySvcRepositorySpec{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varRegistrySvcRepositorySpec)

	if err != nil {
		return err
	}

	*o = RegistrySvcRepositorySpec(varRegistrySvcRepositorySpec)

	return err
}

type NullableRegistrySvcRepositorySpec struct {
	value *RegistrySvcRepositorySpec
	isSet bool
}

func (v NullableRegistrySvcRepositorySpec) Get() *RegistrySvcRepositorySpec {
	return v.value
}

func (v *NullableRegistrySvcRepositorySpec) Set(val *RegistrySvcRepositorySpec) {
	v.value = val
	v.isSet = true
}

func (v NullableRegistrySvcRepositorySpec) IsSet() bool {
	return v.isSet
}

func (v *NullableRegistrySvcRepositorySpec) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegistrySvcRepositorySpec(val *RegistrySvcRepositorySpec) *NullableRegistrySvcRepositorySpec {
	return &NullableRegistrySvcRepositorySpec{value: val, isSet: true}
}

func (v NullableRegistrySvcRepositorySpec) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegistrySvcRepositorySpec) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

