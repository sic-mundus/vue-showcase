/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

import iconSet from 'quasar/icon-set/ionicons-v4'


import Vue from 'vue'

import {Quasar,Notify,Loading} from 'quasar'


Vue.use(Quasar, { config: {"brand":{"primary":"#2c2c54","secondary":"#474787","accent":"#218c74","dark":"#1d1d1d","positive":"#21BA45","negative":"#C10015","info":"#31CCEC","warning":"#F2C037"}},iconSet: iconSet,plugins: {Notify,Loading} })
