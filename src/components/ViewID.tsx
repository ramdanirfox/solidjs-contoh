import {Component, createSignal, onMount} from 'solid-js';

interface IViewID {
    id?: any
}

const SjsxViewID: Component<IViewID> = (props: IViewID) => {
    const [id, setId] = createSignal();
    // return (
    //   <CalendarArea
      
    //   ></CalendarArea>
    //   )
    onMount(() => {
      console.log("propvalue", props);
    })
    return (
      
      <section style={{'display':'none'}}>{props.id}</section>
    )
  }

  export default SjsxViewID;