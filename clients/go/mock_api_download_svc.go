// Code generated by MockGen. DO NOT EDIT.
//
// Generated by this command:
//
//

// Package openapi is a generated GoMock package.
package openapi

import (
	context "context"
	http "net/http"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"
)

// MockDownloadSvcAPI is a mock of DownloadSvcAPI interface.
type MockDownloadSvcAPI struct {
	ctrl     *gomock.Controller
	recorder *MockDownloadSvcAPIMockRecorder
	isgomock struct{}
}

// MockDownloadSvcAPIMockRecorder is the mock recorder for MockDownloadSvcAPI.
type MockDownloadSvcAPIMockRecorder struct {
	mock *MockDownloadSvcAPI
}

// NewMockDownloadSvcAPI creates a new mock instance.
func NewMockDownloadSvcAPI(ctrl *gomock.Controller) *MockDownloadSvcAPI {
	mock := &MockDownloadSvcAPI{ctrl: ctrl}
	mock.recorder = &MockDownloadSvcAPIMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDownloadSvcAPI) EXPECT() *MockDownloadSvcAPIMockRecorder {
	return m.recorder
}

// Download mocks base method.
func (m *MockDownloadSvcAPI) Download(ctx context.Context) ApiDownloadRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Download", ctx)
	ret0, _ := ret[0].(ApiDownloadRequest)
	return ret0
}

// Download indicates an expected call of Download.
func (mr *MockDownloadSvcAPIMockRecorder) Download(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Download", reflect.TypeOf((*MockDownloadSvcAPI)(nil).Download), ctx)
}

// DownloadExecute mocks base method.
func (m *MockDownloadSvcAPI) DownloadExecute(r ApiDownloadRequest) (map[string]any, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DownloadExecute", r)
	ret0, _ := ret[0].(map[string]any)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// DownloadExecute indicates an expected call of DownloadExecute.
func (mr *MockDownloadSvcAPIMockRecorder) DownloadExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DownloadExecute", reflect.TypeOf((*MockDownloadSvcAPI)(nil).DownloadExecute), r)
}

// GetDownload mocks base method.
func (m *MockDownloadSvcAPI) GetDownload(ctx context.Context, downloadId string) ApiGetDownloadRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetDownload", ctx, downloadId)
	ret0, _ := ret[0].(ApiGetDownloadRequest)
	return ret0
}

// GetDownload indicates an expected call of GetDownload.
func (mr *MockDownloadSvcAPIMockRecorder) GetDownload(ctx, downloadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetDownload", reflect.TypeOf((*MockDownloadSvcAPI)(nil).GetDownload), ctx, downloadId)
}

// GetDownloadExecute mocks base method.
func (m *MockDownloadSvcAPI) GetDownloadExecute(r ApiGetDownloadRequest) (*DownloadSvcGetDownloadResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetDownloadExecute", r)
	ret0, _ := ret[0].(*DownloadSvcGetDownloadResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// GetDownloadExecute indicates an expected call of GetDownloadExecute.
func (mr *MockDownloadSvcAPIMockRecorder) GetDownloadExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetDownloadExecute", reflect.TypeOf((*MockDownloadSvcAPI)(nil).GetDownloadExecute), r)
}

// ListDownloads mocks base method.
func (m *MockDownloadSvcAPI) ListDownloads(ctx context.Context) ApiListDownloadsRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListDownloads", ctx)
	ret0, _ := ret[0].(ApiListDownloadsRequest)
	return ret0
}

// ListDownloads indicates an expected call of ListDownloads.
func (mr *MockDownloadSvcAPIMockRecorder) ListDownloads(ctx any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListDownloads", reflect.TypeOf((*MockDownloadSvcAPI)(nil).ListDownloads), ctx)
}

// ListDownloadsExecute mocks base method.
func (m *MockDownloadSvcAPI) ListDownloadsExecute(r ApiListDownloadsRequest) (*DownloadSvcDownloadsResponse, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListDownloadsExecute", r)
	ret0, _ := ret[0].(*DownloadSvcDownloadsResponse)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// ListDownloadsExecute indicates an expected call of ListDownloadsExecute.
func (mr *MockDownloadSvcAPIMockRecorder) ListDownloadsExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListDownloadsExecute", reflect.TypeOf((*MockDownloadSvcAPI)(nil).ListDownloadsExecute), r)
}

// Pause mocks base method.
func (m *MockDownloadSvcAPI) Pause(ctx context.Context, downloadId string) ApiPauseRequest {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Pause", ctx, downloadId)
	ret0, _ := ret[0].(ApiPauseRequest)
	return ret0
}

// Pause indicates an expected call of Pause.
func (mr *MockDownloadSvcAPIMockRecorder) Pause(ctx, downloadId any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Pause", reflect.TypeOf((*MockDownloadSvcAPI)(nil).Pause), ctx, downloadId)
}

// PauseExecute mocks base method.
func (m *MockDownloadSvcAPI) PauseExecute(r ApiPauseRequest) (map[string]any, *http.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PauseExecute", r)
	ret0, _ := ret[0].(map[string]any)
	ret1, _ := ret[1].(*http.Response)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// PauseExecute indicates an expected call of PauseExecute.
func (mr *MockDownloadSvcAPIMockRecorder) PauseExecute(r any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PauseExecute", reflect.TypeOf((*MockDownloadSvcAPI)(nil).PauseExecute), r)
}
