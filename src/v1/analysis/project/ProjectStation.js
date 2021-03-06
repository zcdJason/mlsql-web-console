import * as React from "react";
import { Tabs, Radio } from 'antd';
import '../common.scss'
import ApplyOrSave from "../ApplyOrSave";
import SelectFields from "./SelectFields"
import mix from "../../../common/mixin"
import { StationCommonOp } from "../commonops/StationCommonOp";
import RenameFields from "./RenameFields";
import FunctionField from "./FunctionField";
import { ProjectStationSQLOp } from "./ProjectStationSQLOp";
import { CastFields } from "./CastFields";
import {FormattedMessage} from 'react-intl'
import { JsonFields } from "./JsonFields";

const { TabPane } = Tabs;

export default class ProjectStation extends mix(React.Component).with(StationCommonOp,ProjectStationSQLOp) {
    constructor(props) {
        super(props)
        this.workshop = props.parent.workshop
    }


    render() {
        return  <div className={"station-menu"}>                
                <Tabs defaultActiveKey="1" className={"station-tabs"}>
                    <TabPane tab={<FormattedMessage id="select_columns"/>} key="1">
                    <ApplyOrSave parent={this} onRollback={this.onRollback} handlePersit={this.handlePersit} handleTableInput={this.handleTableInput} ref={(et)=>this.ApplyOrSaveRef=et} onSave={this.onSave} onApply={this.onSelectApply} style={{marginBottom:"30px"}}></ApplyOrSave>                        
                        <SelectFields schemaFields={this.workshop.currentTable.schema.fields} ref={(et)=>this.selectFieldsRef=et} parent={this}></SelectFields>
                    </TabPane>
                    <TabPane tab={<FormattedMessage id="rename_columns"/>} key="2">
                    <ApplyOrSave parent={this} onRollback={this.onRollback}  handlePersit={this.handlePersit} handleTableInput={this.handleTableInput} ref={(et)=>this.ApplyOrSaveRef=et} onSave={this.onSave} onApply={this.onRenameApply} style={{marginBottom:"30px"}}></ApplyOrSave>
                        <RenameFields schemaFields={this.workshop.currentTable.schema.fields} ref={(et)=>this.renameFieldsRef=et} parent={this}></RenameFields>
                    </TabPane>
                    <TabPane tab={<FormattedMessage id="transform_columns"/>} key="3">
                       <ApplyOrSave parent={this} onRollback={this.onRollback}  handlePersit={this.handlePersit} handleTableInput={this.handleTableInput} ref={(et)=>this.ApplyOrSaveRef=et} onSave={this.onSave} onApply={this.onFuncApply} style={{marginBottom:"30px"}}></ApplyOrSave>                        
                       <FunctionField  schemaFields={this.workshop.currentTable.schema.fields} ref={(et)=>this.functionFieldRef=et} parent={this}></FunctionField>
                    </TabPane>
                    <TabPane tab={<FormattedMessage id="cast_columns_type"/>} key="4"> 
                       <CastFields workshop={this.workshop}></CastFields>                                         
                    </TabPane>
                    <TabPane tab={<FormattedMessage id="json_fields"/>} key="5"> 
                       <JsonFields/>                                         
                    </TabPane>
                </Tabs>
            </div>                
    }
}