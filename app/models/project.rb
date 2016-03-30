class Project < ActiveRecord::Base
  has_many :project_users
  has_many :users, through: :project_users
  has_many :tasks

  before_destroy :is_destroyable?

  accepts_nested_attributes_for :tasks

  def is_destroyable?
    tasks.count == 0 || tasks.all? { |t| t.status == "unstarted" }
  end
end
