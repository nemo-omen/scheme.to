export const VElement = (function () {
   /**
    * @param tagName {String}
    * @param options {{attributes: Object,children: Array<vNode>,style: Object<string>,className: string,events: Object}}
    */
   return function VElement(tagName, options) {
      return;
   };
}());

export const VText = (function () {
   /**
    * @param text {String | Number}
    */
   return function VText(text) {
      return;
   }
}());

export const VNode = (function () {
   /**
    * @param vObject {VNode | VText}
    */
   return function VNode(vObject) {
      return;
   }
}());

export const VNodeList = (function () {
   /**
    * @param vNodes {Array<VNode>}
    */
   return function VNodeList(vNodes) {
      return [...vNodes];
   }
}())