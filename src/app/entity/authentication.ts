import { Timestamp } from "rxjs";

export class Authentication {
     createdUserId !: string;
     createdTimestamp!: EpochTimeStamp;
     updatedUserId !: string
     modifiedTimestamp !: EpochTimeStamp;
     id !: number;
     userName !:  string;
     password !: string;
     mobileNumber !: string;
     lastLogin !: EpochTimeStamp;
     token !:  string ;
     expire !: EpochTimeStamp;
     userType !:  string ;
     entityId !: number;
     name !:  string;
}