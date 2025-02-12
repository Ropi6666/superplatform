/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package chat_svc

import (
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

var PermissionThreadCreate = usertypes.Permission{
	Id:   "chat-svc:thread:create",
	Name: "Thread Create",
}

var PermissionThreadView = usertypes.Permission{
	Id:   "chat-svc:thread:view",
	Name: "Thread View",
}

var PermissionThreadEdit = usertypes.Permission{
	Id:   "chat-svc:thread:edit",
	Name: "Thread Edit",
}

var PermissionThreadDelete = usertypes.Permission{
	Id:   "chat-svc:thread:delete",
	Name: "Thread Delete",
}

var PermissionThreadStream = usertypes.Permission{
	Id:   "chat-svc:thread:stream",
	Name: "Thread Stream",
}

var ThreadPermissions = []usertypes.Permission{
	PermissionThreadCreate,
	PermissionThreadView,
	PermissionThreadEdit,
	PermissionThreadDelete,
	PermissionThreadStream,
}
