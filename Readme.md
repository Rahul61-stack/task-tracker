# Task Tracker

File:
Whenever we add a new task, we first check if the JSON file is already created, possible cases:

1. No file present: We create a new file and add the new task here
2. File already exists, update to the current file

Operations:
Add: Add a new task to the JSON File.

# Possible edge cases:

Can we add an exisiting task twice? -> Add a confirmation message and ask if they want to create the duplicate task, or delete the old task

Delete: Straight forward, delete the exisiting task by id

# Error cases:

If ID does not exist, show an error msg to mention this id does not exist

Update: Straight forward, update the exisiting task by id

# Error cases:

If ID does not exist, show an error msg to mention this id does not exist

Mark Tasks -> can update status, lets give user options here to select from (In progress, done)

List tasks,

List tasks by status
Done, not done, in progress
