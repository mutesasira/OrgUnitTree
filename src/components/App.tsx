import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import OUTreeSelect from "./OUTreeSelect";

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <div >
        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                        <h1>Organisation Unit Tree</h1>
                        <button><OUTreeSelect/></button>
                    </>
                )
            }}
        </DataQuery>
    </div>
)

export default MyApp
