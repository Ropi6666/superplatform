---
sidebar_position: 10
tags:
  - user-svc
  - permissions
  - roles
  - authentication
  - authorization
  - service
---

# User Svc

The user service is at the heart of OpenOrch, managing users, tokens, organizations, permissions and more. Each service and human on an OpenOrch network has an account in the `User Svc`.

> This page is a high level overview of the `User Svc`. For more details, please see the [User Svc API documentation](/docs/superplatform/login).

## How it works

The most important thing about the User Svc is that service (machine) and user (human) accounts look and function the same.

Every service you write needs to [register](/docs/superplatform/register) at startup, or [log in](/docs/superplatform/login) with the credentials it saves and manages if it's already regsitered. Just like a human.

A service account is not an admin account, it's a simple user level account. You might wonder how service-to-service calls work then.

### Service-to-service calls

Service to service calls are made possible by simply whitelisting service slugs.

At the moment this is only a static whitelist, but to whitelist your own custom services to be able to call built-in services a dynamic mechanism will be introduced.

### Services with multiple nodes

You might now wonder what happens when a service has multiple instances/nodes. Won't their user accounts "clash" in the `User Svc`? The answer to this is that from the `User Svc` point of view, each node/instance of a service is the same account.

This is possible because the platform is designed with services having a "Shared Database Access".

Let's say you have a Cassandra network that spans multiple Availability Zones/Regions. Your nodes will also span multiple AZs/Regions and each instance of them will log in as `X Svc`.

### The token

The User Svc produces a JWT ([JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)) upon [/user-svc/login](/docs/superplatform/login) in the `token.token` field (see the response documentation).

You can either use this token as a proper JWT - decode it and inspect the contents, or you can just use the token to read the user account that belongs to the token with the [/user-svc/user/by-token](/docs/superplatform/read-user-by-token) endpoint.

### Decoding the token

The [`/user-svc/public-key`](/docs/superplatform/get-public-key) will return you the public key of the User Svc which then you can use that to decode the token.

Use the JWT libraries that are available in your programming language to do that, or use the Singularon [SDK](https://github.com/singulatron/singulatron/tree/main/sdk) if your language is supported.

### Token structure

The structure of the JWT is the following:

```js
{
   "sui":"usr_dC4K75Cbp6",
   "slu":"test-user-slug-0",
   "sri":[
      "user-svc:user",
      "user-svc:org:{org_dC4K7NNDCG}:user"
   ]
}
```

The field names are kept short to save space, so perhaps the Go definition is also educational:

```go
type Claims struct {
	UserId  string   `json:"sui"` // `sui`: singulatron user ids
	Slug    string   `json:"slu"` // `slu`: singulatron slug
	RoleIds []string `json:"sri"` // `sri`: singulatron role ids
	jwt.RegisteredClaims
}
```

## Roles

### Types of roles

### Static

Static roles, such as `user-svc:admin` and `user-svc:user` defined by the `User Svc` are primarily used for simple role-based access control: in the Superplatform UI and API you can edit static roles to add or remove endpoints a user can call.

> If you are looking at restricting access to endpoints in other ways, you might be interested in: [Policy Svc](/docs/built-in-services/policy-svc).

#### Dynamic

Dynamic roles are generated based on specific user-resource associations, offering more flexible permission management compared to static roles.

Dynamic roles look like `user-svc:org:{org_dBZRCej3fo}:admin`. The dynamic values must be surrounded by `{}` symbols. The above example is how organization roles are represented.

These dynamic roles, like static roles are stored in the JWT tokens so it is advisable to keep them to a minimum. The organization example is an apt one here: think about how many GitHub or Google organizations you are part of. Likely even a few dozen are at the most extreme upper limit.

> JWT tokens (and the dynamic they contain) are sent with each request, so try to be efficient with dynamic roles.

### Conventions

Each role created must by prefixed by the slug of the account that created it. Said account becomes the owner of the role and only that account can edit the role.

## Permissions

### Conventions

Each permission created must by prefixed by the slug of the account that created it. Said account becomes the owner of the permission and only that account can add the permission to a role.

> Once you (your service) own a permission (by creating it, and it being prefixed by your account slug), you can add it to any role, not just roles owned by you.

Example; let's say your service is `petstore-svc`. Superplatform prefers fine-grained access control, so you are free to define your own permissions, such as `petstore-svc:read` or `petstore-svc:pet:read`.
