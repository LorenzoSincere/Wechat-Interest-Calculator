# Wechat-Interest-Calculator
利息计算器

&nbsp;&nbsp;&nbsp;&nbsp;本小程序在页面设计上采用四个输入框输入姓名，存入本金，利率和存储年限，一个提交点击按钮，点击按钮后获得利息和存储后总本金的数值。首先事件绑定上，在input输入组件中通过placeholder属性显示输入提示，再通过bindinput绑定输入事件处理函数；再bottom组件中通过bindtap绑定了点击事件函数，再点击提交后返回结果；最后在view组件中嵌套5个view组件来显示，其中一个view将其设为外层view，绑定{{flag}}来设置所有view是否显示，其他4个内层来显示其他信息。

&nbsp;&nbsp;&nbsp;&nbsp;接着是逻辑层的编写，在data中初始化了绑定的数据值，定义了事件函数获取输入的姓名，存入本金，利率和存储年限，在进行for循环利息和总本金计算，最后在用.toFixed(2)函数保留两位小数，再通过setData传到视图层显示出来。

&nbsp;&nbsp;&nbsp;&nbsp;以上为本小程序开发设计总结。

This applet uses four input boxes on the page design to input the name, deposit principal, interest rate and storage period. Click a submit button to obtain the value of interest and total principal after storage. Firstly, on the event binding, the input prompt is displayed through the placeholder attribute in the input component, and then the event handling function is input through the binding; In the bottom component, the click event function is bound through bindtap, and then click submit to return the result; Finally, five view components are nested in the view component to display. One view is set as the outer view, bound with {flag}} to set whether all views are displayed, and the other four inner layers to display other information.

Then the logic layer is written. The bound data value is initialized in data, and the event function is defined to obtain the input name, deposit principal, interest rate and storage years. The for circular interest and total principal are calculated. Finally, the. ToFixed (2) function is used to retain two decimal places, and then transmitted to the view layer through SetData for display.

The above is the summary of this applet development and design.
