export class Enums {
   public status = ['NEW', 'REVIEW', 'ACTIVE', 'INACTIVE','HOLD'];
   public requestType = ['application/json','application/xml','application/text']
   public responseType = ['application/json','application/xml','application/text']
   public method = ['GET','POST','PUT','DELETE']
   public parameterType = ['PATH_PARAM','QUERY_PATAM','HEADER','BODY']
   public paramDataType: string[] = ['String','Int','Boolean','Json','Xml'];
}