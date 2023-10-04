// Summary
// Calendar Area provided seems not satisfy requirement to modify view of element (only hover interaction exposed)
// Probably need to create our own CalendarArea with CalendarDays implementation
import {Accessor, Component, createSignal, onMount} from 'solid-js';
import DatePicker, { CalendarArea, DateObjectUnits, HoverRangeValue, IMonthDaysObject, IRenderJSX } from '@rnwonder/solid-date-picker';
import { PickerValue } from '@rnwonder/solid-date-picker';
import SjsxViewID from './ViewID';
import { DatePickerProps } from '@rnwonder/solid-date-picker/types/components/DatePicker';

// const SjsxCustomDateArea: Component<DatePickerProps> = (props: DatePickerProps) => {
// const SjsxCustomDateArea: IRenderJSX = (props: DatePickerProps) => {
const SjsxCustomDateArea: any = (props: any) => {
  const [startDay, setStartDay] = createSignal<DateObjectUnits | undefined>();
  const [endDay, setEndDay] = createSignal<DateObjectUnits | undefined>();
  const [multipleObject, setMultipleObject] = createSignal<DateObjectUnits[]>(
    []
  );
  const [hoverRangeValue, setHoverRangeValue] = createSignal<HoverRangeValue>(
    {}
  );
  const onHoverDay = (
    day: IMonthDaysObject,
    month: Accessor<number>,
    year: Accessor<number>
  ) => {
    if (props.disableRangeHoverEffect) return;
    if (props.type !== "range") return;
    if (!hoverRangeValue()?.start) return;
    // const { end, start, initial } = handleDateRange({
    //   day,
    //   month,
    //   year,
    //   endDay: hoverRangeValue()?.end,
    //   startDay: hoverRangeValue()?.start,
    //   disabledDays: props.disabledDays,
    //   hover: true,
    //   enabledDays: props.enabledDays,
    // });
  //   const { end, start, initial } = (a: any): {start: any, end: any} => {console.log("Handling range", a); return {start: fakeDateObj, end: fakeDateObj};
  // };

  //   const fakeDateObj = {year: 2023, month: 1, day: 3};

    // setHoverRangeValue({
    //   start,
    //   end,
    // });
  };

  const onHoverDayEnd = (a: any) => {console.log("Hover Day ENd triggered",a)};
  onMount(() => {
    console.log("propvalue", props);
  })
  return (
    <>
    <SjsxViewID id="SjsxCustomDateArea"></SjsxViewID>
    <CalendarArea
    {...props}
    startDay={startDay}
    endDay={endDay}
    multipleObject={multipleObject}
    hoverRangeValue={hoverRangeValue}
    onHoverDay={onHoverDay}
    onHoverDayEnd={onHoverDayEnd}
    
    ></CalendarArea>
    </>
    )
  // return (
    
  //   <div>Pervobaan</div>
  // )
  // weekDaysJSX={weekDaysJSX}
}

const SjsxDateRange: Component = () => {
  const [date, setDate] = createSignal
  <PickerValue>({
    value: {},
    label: ''
  });
    const [weeknum, set_weeknum] = createSignal(5)

  return (
    <>
    <SjsxViewID id="SjsxDateRange"></SjsxViewID>
    <DatePicker value={date} setValue={setDate} weekStartDay={weeknum()} calendarJSX={SjsxCustomDateArea}></DatePicker> 
  </>
  )
};

export default SjsxDateRange;