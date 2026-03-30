# 大数据

大数据

```
vi /etc/sysconfig/network-scripts/ifefg-ens33

```

在 linux 终端中使用 vim 进行编辑后，本来想保存。但是不小心使用了 【ctrl+s】。导致按什么键盘都没有反应。vim编辑器里就像卡死一样。

原因
使用 ctrl + s 导致。其实不只是vim中会这样，只要在终端中使用了ctrl+s都会卡死。因为使用此命令是锁定屏幕，也就是让屏幕暂停输入。所以不会有任何响应。

解决办法
ctrl + q ：解锁屏幕
