// @Components
import Scheduler from "@/components/scheduler/Scheduler";

// @View model
import ScheduleViewModel from "./ScheduleViewModel";

const Schedule = () => {

    const { test } = ScheduleViewModel()

    return (
        <>
            <Scheduler />
        </>
    );
};

export default Schedule;
