-- Stage 2 design only. Not executed or connected by the preview.
-- Keys are opaque IDs. All child queries must enforce household ownership.
CREATE TABLE households(id TEXT PRIMARY KEY, parent_subject TEXT NOT NULL UNIQUE, consent_version TEXT, consent_at TEXT, created_at TEXT NOT NULL);
CREATE TABLE child_profiles(id TEXT PRIMARY KEY, household_id TEXT NOT NULL REFERENCES households(id), nickname_preset TEXT NOT NULL, avatar_id TEXT NOT NULL, age_band TEXT NOT NULL CHECK(age_band IN ('6-8','9-11','12-14')), ai_enabled INTEGER NOT NULL DEFAULT 0, daily_limit INTEGER NOT NULL DEFAULT 5, deleted_at TEXT);
CREATE TABLE content_versions(id TEXT PRIMARY KEY, topic_id TEXT NOT NULL, version INTEGER NOT NULL, age_band TEXT NOT NULL, language TEXT NOT NULL, status TEXT NOT NULL CHECK(status IN ('draft','review','published','retired')), body_object_key TEXT NOT NULL, sources_json TEXT NOT NULL, license_json TEXT NOT NULL, curriculum_tags_json TEXT, reviewed_by TEXT, reviewed_at TEXT, UNIQUE(topic_id,version,age_band,language));
CREATE TABLE bookmarks(child_id TEXT NOT NULL REFERENCES child_profiles(id), topic_id TEXT NOT NULL, created_at TEXT NOT NULL, PRIMARY KEY(child_id,topic_id));
CREATE TABLE activity(child_id TEXT NOT NULL REFERENCES child_profiles(id), activity_id TEXT NOT NULL, kind TEXT NOT NULL, completed_at TEXT NOT NULL, content_version TEXT, PRIMARY KEY(child_id,activity_id));
CREATE TABLE quota_daily(scope_id TEXT NOT NULL, date_utc TEXT NOT NULL, reservations INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(scope_id,date_utc));
CREATE TABLE answer_cache(cache_key TEXT PRIMARY KEY, topic_id TEXT NOT NULL, content_version TEXT NOT NULL, age_band TEXT NOT NULL, language TEXT NOT NULL, answer_object_key TEXT NOT NULL, review_state TEXT NOT NULL, expires_at TEXT NOT NULL);
CREATE TABLE request_receipts(child_id TEXT NOT NULL, request_id TEXT NOT NULL, status TEXT NOT NULL, created_at TEXT NOT NULL, PRIMARY KEY(child_id,request_id));
