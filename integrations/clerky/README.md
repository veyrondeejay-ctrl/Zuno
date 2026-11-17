# ZUNO central API integration

Snapshot of the dedicated ZUNO API currently hosted in the shared Clerky Worker. The frontend calls this existing service; copying the frontend does not migrate runtime configuration.

The included worker.mjs is a minimal integration entry point. The shared deployment dispatches /api/zuno/* to handleZuno before other routes. auth.mjs supplies password hashing; connections.mjs reads the centrally managed encrypted connection. Runtime secrets, database contents and admin credentials are deliberately excluded. Configure environment bindings privately before deploying elsewhere.

Run regression tests from this directory with `node --test tests/zuno.test.mjs`.
