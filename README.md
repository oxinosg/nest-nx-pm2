# NxNestTest

Local development setup test for monorepo

## Stack:
 - nestjs
 - nx
 - pm2


## Services:
 - nest-1 (depends on nest-2)
 - nest-2



Building all affected apps of nest-1 -> running them in prod mode -> running nest-1 in dev mode

```
nx affected --exclude=nest-1 --target=build
nx affected --exclude=nest-1 --target=serve-prod && nx serve nest-1
```
