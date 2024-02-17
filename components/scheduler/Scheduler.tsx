"use client";
import { useEffect, useRef, useState } from "react";

// @Syncfusion
import {
    Agenda,
    Day,
    Inject,
    Month,
    ScheduleComponent,
    ViewDirective,
    ViewsDirective,
    Week,
    CellClickEventArgs,
    EventClickArgs
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
import { extend } from '@syncfusion/ej2-base';

// Constants
import dataSource from "../../constants/scheduleData.json"
import { endHour, startHour, workHours } from "@/constants/schedule";

registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjW35YcndUQmNeWUBzWA==");



const Scheduler = () => {

    const [allEvents, setAllEvents] = useState<any>()

    const scheduleObj = useRef<ScheduleComponent>(null);

    const onCellClick = (args: CellClickEventArgs): void => {
        console.log('onCellClick args --->', args);        
        scheduleObj.current?.openEditor(args, 'Add');
        let eventCollection = scheduleObj.current?.getEvents();
        console.log('eventCollection -->', eventCollection);
        
    }

    const onEventClick = (args: EventClickArgs): void => {
        console.log('onEventClick args --->', args);        
        if (!(args.event as any).RecurrenceRule) {
            scheduleObj.current?.openEditor(args.event, 'Save');
        }
        else {
            scheduleObj.current?.quickPopup.openRecurrenceAlert();
        }
    }


    const data = extend([], dataSource.zooEventsData, null, true);


    useEffect(() => {

        const allData = () => {
         setAllEvents(scheduleObj.current?.getEvents()) 
        }

        allData();
      
        
    }, [])


    console.log('allEvents -->', allEvents);
    
    


    const onActionBegin = (args) => {
        console.log('onActionBegin args --->', args);
        if (
            args.requestType === 'eventCreate' ||
            args.requestType === 'eventChange'
        ) {
            let data = args.data instanceof Array ? args.data[0] : args.data;
            args.cancel = !scheduleObj.current.isSlotAvailable(data);
        }
       
        
    };




    return (
        <>
            <ScheduleComponent
                ref={scheduleObj}
                width='100%' 
                height='100vh'
                rowAutoHeight={true}
                eventSettings={{ dataSource: data }} 
                workHours={workHours}
                startHour={startHour} 
                endHour={endHour}
                eventClick={onEventClick}
                cellClick={onCellClick} 
                actionBegin={onActionBegin}
                // eventRendered={onEventRendered}
            >
                <ViewsDirective>
                    <ViewDirective option="Day" />
                    <ViewDirective option="Week" />
                    <ViewDirective option="Month" />
                    <ViewDirective option="Agenda" />
                </ViewsDirective>
                <Inject services={[Day, Week, Month, Agenda]} />
            </ScheduleComponent>
        </>
    );
};

export default Scheduler;
