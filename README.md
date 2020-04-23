# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|password|string|null: false|
|email|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :comments

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|strings|null: false|

### Association
- has_many :users, through:  :groups_users
- has_many :groups_users
- has_many :comments

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group