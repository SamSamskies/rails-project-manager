task :delete_stale_finished_tasks => :environment do
  Task.where("updated_at <= ? and status == ?", Time.now - 7.days, "finished")
end
