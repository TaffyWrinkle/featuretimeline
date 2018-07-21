import { TeamSettingsIteration } from 'TFS/Work/Contracts';
import { WorkItemLink, WorkItem } from 'TFS/WorkItemTracking/Contracts';

export type TeamIterationsMap = { [teamId: string]: TeamSettingsIteration[] }

export interface IEpicRollupWorkItemAwareState {
    epicHierarchy: WorkItemLink[];
    dependencies: WorkItemLink[];
    pagedWorkItems: WorkItem[];
}