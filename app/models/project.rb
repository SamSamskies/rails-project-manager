class Project < ActiveRecord::Base
  has_many :project_users
  has_many :users, through: :project_users
  has_many :tasks

  before_destroy :is_destroyable?

  accepts_nested_attributes_for :tasks

  def is_destroyable?
    if tasks.all? { |t| t.status == "unstarted" } || tasks.count == 0
      true
    else
      errors.add :tasks, 'Project must have 0 tasks or have all tasks unstarted.'
      false
    end
  end
end
