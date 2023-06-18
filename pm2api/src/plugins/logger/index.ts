let log = (message: string | number = '', data: any = []) => {
  console.log(message, data);
  /*
log_event_session (id:intiger, hash:string, time_start:timestamp)
log_event_query (id:number, hash_key:string  query:string)
log_event_message ( id:number, message:string )
log_event_type (id:number, type:string)
log_event_data (id: number, data_value: json)
log_event_logs (id:number, timestamp_create:timestamp, session_id:primary key, query_id:primary key, message_id:primary key, type_id:primary key, data_id:primary key)

view_log ( log_id, log_timestamp_create, session_hash, query, query_hash, message, type, data)

   */
};
export const logger = {
  error: log,
  warn: log,
  debug: log,
  info: log,
};
