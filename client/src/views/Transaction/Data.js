// const UserData = [
//     {id: 1, name: 'Suparman', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
//     {id: 2, name: 'Sapardi', registered: '2018/01/01', role: 'Member', status: 'Active'},
//     {id: 3, name: 'Suparjo', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
//     {id: 4, name: 'Sujatmiko', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
//     {id: 5, name: 'Sunaryo', registered: '2018/03/01', role: 'Member', status: 'Pending'},
//     {id: 6, name: 'Sugiman', registered: '2018/01/21', role: 'Staff', status: 'Active'},
//     {id: 7, name: 'Subianto', registered: '2018/01/01', role: 'Member', status: 'Active'},
//     {id: 8, name: 'Sutrisno', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
//     {id: 9, name: 'Sutejo', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
//     {id: 10, name: 'Superman', registered: '2018/03/01', role: 'Member', status: 'Pending'},
//     {id: 11, name: 'Supratman', registered: '2018/03/01', role: 'Owner', status: 'Active'}
//   ]

  // const TransactionData = [
  //   { id: '01982200001706176402', userid: 1, usergroup: 1, name: 'Steven McManaman', phonenumber: '081212345678', nominal: 'Rp 200.000', status: 'success' },
  //   { id: '01982254321706176402', userid: 2, usergroup: 2, name: 'Leanne Graham', phonenumber: '081287654321', nominal: 'Rp 300.000', status: 'success' },
  //   { id: '01982201201706176402', userid: 3, usergroup: 3, name: 'Ervin Howell', phonenumber: '082345665432', nominal: 'Rp 400.000', status: 'success' },
  //   { id: '01982201201706176402', userid: 4, usergroup: 1, name: 'Clementine Bauch', phonenumber: '082345678901', nominal: 'Rp 200.000', status: 'success' },
  //   { id: '01982201201706176402', userid: 5, usergroup: 1, name: 'Patricia Lebsack', phonenumber: '082345665432', nominal: 'Rp 200.000', status: 'success' },
  //   { id: '01982201201706176402', userid: 6, usergroup: 1, name: 'Dennis', phonenumber: '082345665432', nominal: 'Rp 200.000', status: 'success' },
  //   { id: '01982201201706176402', userid: 7, usergroup: 2, name: 'Curtis Jones', phonenumber: '082345665432', nominal: 'Rp 300.000',status: 'success' },
  //   { id: '01982201201706176402', userid: 8, usergroup: 3, name: 'Nicholas', phonenumber: '082345665432', nominal: 'Rp 400.000',status: 'success' },
  //   { id: '01982201201706176402', userid: 9, usergroup: 3, name: 'Glenna', phonenumber: '082345665432', nominal: 'Rp 400.000',status: 'success' },
  //   { id: '01982201201706176402', userid: 10, usergroup: 1, name: 'Clementina', phonenumber: '082345665432', nominal: 'Rp 200.000',status: 'success' },
  // ]

  const DummyData = [
    { id: 1321592234, payment: 'Virtual Bank Account', date: '2020-06-13 00:02:00', bankid: '4576', paymentcode: '0811101187e', amount: '1.000.000', orderto: 'topup_TU081212345678', customermail: 'rizkimuhammad@gmail.com' ,settlement:'2020-06-13 00:01:00', Status: 'success'},
    { id: 2235923253, payment: 'E-Wallet', date: '2020-06-13 00:03:00', bankid: '4576', paymentcode: '0812201187e', amount: '1.250.000', orderto: 'topup_TU081287654321', customermail: 'muhammad.ali@gmail.com',settlement:'2020-06-13 00:01:00', Status: 'pending'},
    { id: 2352353252, payment: 'E-Wallet', date: '2020-06-13 00:04:00', bankid: '4243', paymentcode: '0813301187e', amount: '2.250.000', orderto: 'topup_TU082345665432', customermail: 'kristianto@gmail.com',settlement:'2020-06-13 00:01:00', Status: 'failed'},
    { id: 4532523526, payment: 'Virtual Bank Account', date: '2020-06-13 00:05:00', bankid: '4021', paymentcode: '0814401187e', amount: '1.440.000', orderto: 'topup_TU082345678901', customermail: 'mariad_dwi@gmail.com',settlement:'2020-06-13 00:01:00', Status: 'success'},
    { id: 1432593595, payment: 'Virtual Bank Account', date: '2020-06-13 00:06:00', bankid: '4478', paymentcode: '0815501187e', amount: '900.000', orderto: 'topup_TU082345665432', customermail: 'stevenmcmanaman',settlement:'2020-06-13 00:01:00', Status: 'success'},
    { id: 4295375376, payment: 'E-Wallet', date: '2020-06-13 00:07:00', bankid: '5189', paymentcode: '0816601187e', amount: '2.475.000', orderto: 'topup_TU082345665432', customermail: 'stevenmcmanaman',settlement:'2020-06-13 00:01:00', Status: 'success'},
    { id: 5023585385, payment: 'Virtual Bank Account', date: '2020-06-13 00:08:00', bankid: '4021', paymentcode: '0817701187e', amount: '1.350.000', orderto: 'topup_TU082345665432', customermail: 'stevenmcmanaman',settlement:'2020-06-13 00:01:00', Status: 'pending'},
    { id: 5838753232, payment: 'E-Wallet', date: '2020-06-13 00:09:00', bankid: '4400', paymentcode: '0818801187e', amount: '1.350.000',orderto: 'topup_TU081212345678', customermail: 'stevenmcmanaman',settlement:'2020-06-13 00:01:00', Status: 'pending'},
    { id: 5923458358, payment: 'E-Wallet', date: '2020-06-13 00:01:00', bankid: '4576', paymentcode: '0819901187e', amount: '1.350.000', orderto: 'topup_TU082345665432', customermail: 'stevenmcmanaman',settlement:'2020-06-13 00:01:00', Status: 'success'},
    { id: 5235938555, payment: 'E-Wallet', date: '2020-06-13 00:01:00', bankid: '4576', paymentcode: '0811101187e', amount: '1.350.000', orderto: 'topup_TU081212345678', customermail: 'stevenmcmanaman',settlement:'2020-06-13 00:01:00', Status: 'failed'}
  ]

  export default DummyData;
