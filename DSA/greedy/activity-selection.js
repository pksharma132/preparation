function activitySelection(activities) {
  activities.sort((a, b) => a[1] - b[1]);
    const selectedActivities = [];
    let lastEndTime = -1

    for (let [start, end] of activities) {
        if (start >= lastEndTime) {
            selectedActivities.push([start, end])
            lastEndTime = end;
        }
    }

    return selectedActivities;
}

console.log(
  activitySelection([
    [0, 6],
    [1, 2],
    [3, 4],
    [5, 7],
    [8, 9],
  ])
);


/**
 * sort with the end time
 * the activity to be picked must start after the last end
 * 
 */