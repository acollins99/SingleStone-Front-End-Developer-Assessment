export interface StepsMetaData {
    id: string;
    stepNumber: string;
    versionedContent: versionContent[];
}
  
export interface versionContent {
    title: string;
    body: string;
    effectiveDate: string;
}

export interface stepContent {
    title: string;
    body: string;
    contentStep: string;
}
