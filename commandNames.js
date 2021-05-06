const commandNames = [
  'getGeneralInfo',
  'getStatus',
  'rebootDevice',

  //untested
  'getWebSettings',
  'getWebUiSettings',
  'getWifiSettings',
  'getMobileSettings',
  'getWelcomePageContent',
  'getPortForwardingRules',
  'getDhcpRange',
  'countRecSms',
  'queryRecSms',
  'getAllRecSms',
  'startWebSession',
  'stopWebSession',
  'testWebSession',
  'getUploadProgress',
  'getReflashProgress',
  'connectToInternet',
  'disconnectFromInternet',
  'getSimStatus',
  'getExternalWp',
  'getVpnParams',
  'getApnParams',
  'getDmz',

  //trash

  //danger (untested)
  'prepareUploadingFw',
  'installFw',
  'killUpcli',
  'lte_cm_enter_pin',
  'lte_cm_modify_pin',
  'lte_cm_lock_sim',
  'resetFactorySettings'
]

module.exports = commandNames