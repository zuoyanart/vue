// import timeline from './src/timeline.vue';
// import timelineItem from './src/timeline-item.vue';
//
// timeline.item = timelineItem;
// // export default timeline;
// module.exports = timeline;


const pztimeline = require('./src/timeline.vue');
const pztimelineItem = require('./src/timeline-item.vue');

pztimeline.item = pztimelineItem;

pztimeline.install = function(Vue) {
  Vue.component('timeline', pztimeline);
  Vue.component('timeline-item', pztimelineItem);
};


module.exports = pztimeline;
