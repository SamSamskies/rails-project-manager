namespace :delete_stale_finished_tasks do
  Task.where("updated_at <= ? and status == ?", Time.now - 7.days, "finished")
end
