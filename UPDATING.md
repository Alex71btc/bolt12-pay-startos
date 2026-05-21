# Updating the upstream version

BOLT12 Pay is built locally from the [`Dockerfile`](./Dockerfile). The image has two upstream inputs:

1. **The lndk-pay application** — the [`upstream/`](./upstream) git submodule ([Alex71btc/lndk-pay](https://github.com/Alex71btc/lndk-pay)). The image is built from its `app/` subdirectory.
2. **The LNDK runtime** — pulled as a prebuilt image and pinned in the `Dockerfile`'s first stage (`FROM alex71btc/lndk:<tag> AS lndkstage`).

## Determining the upstream version

- **lndk-pay** — the submodule is pinned to a specific commit (`git -C upstream rev-parse HEAD`). Latest upstream commit:

  ```
  gh api repos/Alex71btc/lndk-pay/commits/main --jq .sha
  ```

- **LNDK image** ([alex71btc/lndk](https://hub.docker.com/r/alex71btc/lndk) on Docker Hub) — confirm the tag exists before bumping:

  ```
  curl -fsSL "https://hub.docker.com/v2/repositories/alex71btc/lndk/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

## Applying the bump

- **lndk-pay** — advance the submodule to the new commit and stage the gitlink:

  ```
  git -C upstream fetch && git -C upstream checkout <commit>
  git add upstream
  ```

- **LNDK** — set the `lndkstage` tag in the [`Dockerfile`](./Dockerfile) to the new `alex71btc/lndk:<tag>`.

Then bump `version` and `releaseNotes` in `startos/versions/` per [CONTRIBUTING.md](./CONTRIBUTING.md).
