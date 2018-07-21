import { ActionsUnion, createAction } from "../../../Common/ActionHelper";
import { WorkItemLink, WorkItem } from 'TFS/WorkItemTracking/Contracts';


export const EpicHierarchyReceivedType = "@@workitems/EpicHierarchyReceived";
export const DependenciesReceivedType = "@@workitems/DependenciesReceived";
export const PagedWorkItemsReceivedType = "@@workitems/PagedWorkItemsReceived";
export const WorkItemsActionCreator = {
    epicHierarchyReceived: (links: WorkItemLink[]) =>
        createAction(EpicHierarchyReceivedType, {
            links
        }),
    dependenciesReceived: (links: WorkItemLink[]) =>
        createAction(DependenciesReceivedType, {
            links
        }),
    pagedWorkItemsReceived: (workItems: WorkItem[]) =>
        createAction(PagedWorkItemsReceivedType, {
            workItems
        }),

}

export type WorkItemsActions = ActionsUnion<typeof WorkItemsActionCreator>;