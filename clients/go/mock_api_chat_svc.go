// Code generated by MockGen. DO NOT EDIT.
//
// Generated by this command:
//
//	mockgen -source=/home/crufter/singulatron/server/../clients/go/api_chat_svc.go -destination=/home/crufter/singulatron/server/../clients/go/mock_api_chat_svc.go -package=openapi
//

// Package openapi is a generated GoMock package.
package openapi

import (
	context "context"
	http "net/http"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"
)

// MockChatSvcAPI is a mock of ChatSvcAPI interface.
type MockChatSvcAPI struct {
	ctrl     *gomock.Controller
	recorder *MockChatSvcAPIMockRecorder
}

// MockChatSvcAPIMockRecorder is the mock recorder for MockChatSvcAPI.
type MockChatSvcAPIMockRecorder struct {
	mock *MockChatSvcAPI
}

// NewMockChatSvcAPI creates a new mock instance.
func NewMockChatSvcAPI(ctrl *gomock.Controller) *MockChatSvcAPI {
	mock := &MockChatSvcAPI{ctrl: ctrl}
	mock.recorder = &MockChatSvcAPIMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockChatSvcAPI) EXPECT() *MockChatSvcAPIMockRecorder {
	return m.recorder
}

// AddMessage mocks base method.
func (m *MockChatSvcAPI) AddMessage(ctx context.Context, threadId string) ApiAddMessageRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddMessage", ctx, threadId)
	ret0, _ := ret[0].(ApiAddMessageRequest)
	return ret0
}

// AddMessage indicates an expected call of AddMessage.
func (mr *MockChatSvcAPIMockRecorder) AddMessage(ctx, threadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddMessage", reflect.TypeOf((*MockChatSvcAPI)(nil).AddMessage), ctx, threadId)
}

// AddMessageExecute mocks base method.
func (m *MockChatSvcAPI) AddMessageExecute(r ApiAddMessageRequest) (map[string]any, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddMessageExecute", r)
	ret0, _ := ret[0].(map[string]any)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// AddMessageExecute indicates an expected call of AddMessageExecute.
func (mr *MockChatSvcAPIMockRecorder) AddMessageExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddMessageExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).AddMessageExecute), r)
}

// AddThread mocks base method.
func (m *MockChatSvcAPI) AddThread(ctx context.Context) ApiAddThreadRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddThread", ctx)
	ret0, _ := ret[0].(ApiAddThreadRequest)
	return ret0
}

// AddThread indicates an expected call of AddThread.
func (mr *MockChatSvcAPIMockRecorder) AddThread(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddThread", reflect.TypeOf((*MockChatSvcAPI)(nil).AddThread), ctx)
}

// AddThreadExecute mocks base method.
func (m *MockChatSvcAPI) AddThreadExecute(r ApiAddThreadRequest) (*ChatSvcAddThreadResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddThreadExecute", r)
	ret0, _ := ret[0].(*ChatSvcAddThreadResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// AddThreadExecute indicates an expected call of AddThreadExecute.
func (mr *MockChatSvcAPIMockRecorder) AddThreadExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddThreadExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).AddThreadExecute), r)
}

// DeleteMessage mocks base method.
func (m *MockChatSvcAPI) DeleteMessage(ctx context.Context, messageId string) ApiDeleteMessageRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteMessage", ctx, messageId)
	ret0, _ := ret[0].(ApiDeleteMessageRequest)
	return ret0
}

// DeleteMessage indicates an expected call of DeleteMessage.
func (mr *MockChatSvcAPIMockRecorder) DeleteMessage(ctx, messageId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteMessage", reflect.TypeOf((*MockChatSvcAPI)(nil).DeleteMessage), ctx, messageId)
}

// DeleteMessageExecute mocks base method.
func (m *MockChatSvcAPI) DeleteMessageExecute(r ApiDeleteMessageRequest) (map[string]any, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteMessageExecute", r)
	ret0, _ := ret[0].(map[string]any)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// DeleteMessageExecute indicates an expected call of DeleteMessageExecute.
func (mr *MockChatSvcAPIMockRecorder) DeleteMessageExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteMessageExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).DeleteMessageExecute), r)
}

// DeleteThread mocks base method.
func (m *MockChatSvcAPI) DeleteThread(ctx context.Context, threadId string) ApiDeleteThreadRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteThread", ctx, threadId)
	ret0, _ := ret[0].(ApiDeleteThreadRequest)
	return ret0
}

// DeleteThread indicates an expected call of DeleteThread.
func (mr *MockChatSvcAPIMockRecorder) DeleteThread(ctx, threadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteThread", reflect.TypeOf((*MockChatSvcAPI)(nil).DeleteThread), ctx, threadId)
}

// DeleteThreadExecute mocks base method.
func (m *MockChatSvcAPI) DeleteThreadExecute(r ApiDeleteThreadRequest) (map[string]any, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteThreadExecute", r)
	ret0, _ := ret[0].(map[string]any)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// DeleteThreadExecute indicates an expected call of DeleteThreadExecute.
func (mr *MockChatSvcAPIMockRecorder) DeleteThreadExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteThreadExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).DeleteThreadExecute), r)
}

// Events mocks base method.
func (m *MockChatSvcAPI) Events(ctx context.Context) ApiEventsRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Events", ctx)
	ret0, _ := ret[0].(ApiEventsRequest)
	return ret0
}

// Events indicates an expected call of Events.
func (mr *MockChatSvcAPIMockRecorder) Events(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Events", reflect.TypeOf((*MockChatSvcAPI)(nil).Events), ctx)
}

// EventsExecute mocks base method.
func (m *MockChatSvcAPI) EventsExecute(r ApiEventsRequest) (*ChatSvcEventThreadUpdate, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "EventsExecute", r)
	ret0, _ := ret[0].(*ChatSvcEventThreadUpdate)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// EventsExecute indicates an expected call of EventsExecute.
func (mr *MockChatSvcAPIMockRecorder) EventsExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "EventsExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).EventsExecute), r)
}

// GetMessages mocks base method.
func (m *MockChatSvcAPI) GetMessages(ctx context.Context, threadId string) ApiGetMessagesRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetMessages", ctx, threadId)
	ret0, _ := ret[0].(ApiGetMessagesRequest)
	return ret0
}

// GetMessages indicates an expected call of GetMessages.
func (mr *MockChatSvcAPIMockRecorder) GetMessages(ctx, threadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMessages", reflect.TypeOf((*MockChatSvcAPI)(nil).GetMessages), ctx, threadId)
}

// GetMessagesExecute mocks base method.
func (m *MockChatSvcAPI) GetMessagesExecute(r ApiGetMessagesRequest) (*ChatSvcGetMessagesResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetMessagesExecute", r)
	ret0, _ := ret[0].(*ChatSvcGetMessagesResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// GetMessagesExecute indicates an expected call of GetMessagesExecute.
func (mr *MockChatSvcAPIMockRecorder) GetMessagesExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMessagesExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).GetMessagesExecute), r)
}

// GetThread mocks base method.
func (m *MockChatSvcAPI) GetThread(ctx context.Context, threadId string) ApiGetThreadRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetThread", ctx, threadId)
	ret0, _ := ret[0].(ApiGetThreadRequest)
	return ret0
}

// GetThread indicates an expected call of GetThread.
func (mr *MockChatSvcAPIMockRecorder) GetThread(ctx, threadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetThread", reflect.TypeOf((*MockChatSvcAPI)(nil).GetThread), ctx, threadId)
}

// GetThreadExecute mocks base method.
func (m *MockChatSvcAPI) GetThreadExecute(r ApiGetThreadRequest) (*ChatSvcGetThreadResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetThreadExecute", r)
	ret0, _ := ret[0].(*ChatSvcGetThreadResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// GetThreadExecute indicates an expected call of GetThreadExecute.
func (mr *MockChatSvcAPIMockRecorder) GetThreadExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetThreadExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).GetThreadExecute), r)
}

// GetThreads mocks base method.
func (m *MockChatSvcAPI) GetThreads(ctx context.Context) ApiGetThreadsRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetThreads", ctx)
	ret0, _ := ret[0].(ApiGetThreadsRequest)
	return ret0
}

// GetThreads indicates an expected call of GetThreads.
func (mr *MockChatSvcAPIMockRecorder) GetThreads(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetThreads", reflect.TypeOf((*MockChatSvcAPI)(nil).GetThreads), ctx)
}

// GetThreadsExecute mocks base method.
func (m *MockChatSvcAPI) GetThreadsExecute(r ApiGetThreadsRequest) (*ChatSvcGetThreadsResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetThreadsExecute", r)
	ret0, _ := ret[0].(*ChatSvcGetThreadsResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// GetThreadsExecute indicates an expected call of GetThreadsExecute.
func (mr *MockChatSvcAPIMockRecorder) GetThreadsExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetThreadsExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).GetThreadsExecute), r)
}

// UpdateThread mocks base method.
func (m *MockChatSvcAPI) UpdateThread(ctx context.Context, threadId string) ApiUpdateThreadRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateThread", ctx, threadId)
	ret0, _ := ret[0].(ApiUpdateThreadRequest)
	return ret0
}

// UpdateThread indicates an expected call of UpdateThread.
func (mr *MockChatSvcAPIMockRecorder) UpdateThread(ctx, threadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateThread", reflect.TypeOf((*MockChatSvcAPI)(nil).UpdateThread), ctx, threadId)
}

// UpdateThreadExecute mocks base method.
func (m *MockChatSvcAPI) UpdateThreadExecute(r ApiUpdateThreadRequest) (*ChatSvcAddThreadResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateThreadExecute", r)
	ret0, _ := ret[0].(*ChatSvcAddThreadResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// UpdateThreadExecute indicates an expected call of UpdateThreadExecute.
func (mr *MockChatSvcAPIMockRecorder) UpdateThreadExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateThreadExecute", reflect.TypeOf((*MockChatSvcAPI)(nil).UpdateThreadExecute), r)
}