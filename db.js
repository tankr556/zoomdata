const mysql=require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'meetingDB',
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL server');
  });
  
  const meeting = {
    event:'meeting.ended',
    accountid: 'Jc2D4fnjR1-TdrvukOqmxA',
    duration: 60,
    startTime: '2023-07-13 10:51:45',
    timeZone: 'Asia/Calcutta',
    endTime: '2023-07-13 10:52:11',
    topic: 'My Meeting',
    Meeting_id: '87344914526',
    type: 2,
    uuid: 'dsw3kV/vSBGTPcGoyb80Cw==',
    hostid: '21RWZDPWRhiGPmtWD1XYNQ',
    eventTs: 1689245531331,
  };
  
  connection.query('INSERT INTO meetingdetails SET ?', meeting, (error, results, fields) => {
    if (error) {
      console.error('Error inserting meeting:', error);
      return;
    }
    console.log('Meeting inserted successfully');
  });
  //ALTER TABLE meetingdetails ADD COLUMN accountid VARCHAR(255);  -----( Mysql query)
