import React from "react";
import {useStateContext} from "../../contexts/ContextProvider";
import {Header} from "../../components";
import {
    ChartComponent,
    Inject,
    Legend,
    Category,
    ColumnSeries,
    DataLabel,
    SeriesCollectionDirective, SeriesDirective,
    Tooltip
} from "@syncfusion/ej2-react-charts";
import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from "../../data/dummy";

const Bar = () => {
    const {currentMode} = useStateContext()

    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category='Bar' title='Inflation  Rate in Percentage' />
            <ChartComponent
                id='bar-chart'
                height='420px'
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{border: {width: 0}}}
                tooltip={{enable: true}}
                legendSettings={{ background: 'white' }}
                background = {currentMode === "Dark" ? '#33373E': '#fff'}

            >
                <Inject services={[ColumnSeries, Category,Tooltip, DataLabel, Legend]} />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>

    )
}

export default Bar