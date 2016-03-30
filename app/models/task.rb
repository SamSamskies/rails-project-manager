class Task < ActiveRecord::Base
  belongs_to :project
  validates :project_id, presence: true
  validates :status, inclusion: { in: %w(unstarted started finished) }
end
