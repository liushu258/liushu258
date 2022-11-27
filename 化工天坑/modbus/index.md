# Modbus


Modbus RTU通讯协议

Modbus全球最早用于工业现场的总线规约，Modbus通信协议具有多个变种，其具有支持串口（主要是RS-485 总线），以太网多个版本，其中最著名的是Modbus RTU，Modbus ASCI和Modbus TCP三种。其中Modbus RTU与Modbus ASCII均为支持RS-485总线的通信协议，其中Modbus RTU由于其采用二进制表现形式以及紧数据结构，通信效率较高，应用比较广泛。

TCP/UDP协议

TCP和UDP协议是TCP/IP协议的核心。TCP协议是一TCP（Transmission Control Protol）和UDP（User Datagram Protocol）协议属于传输层协议。其中TCP提供IP环境下的数据可靠传输，它提供的服务包括数据流传送、可靠性、有效流控、全双工操作和多路复用。UDP（用户数据报协议）是一个简单的面向数据报的传输层协议。提供的是非面向连接的、不可靠的数据流传输。UDP不提供可靠性，也不提供报文到达确认、排序以及流量控制等功能。

Modbus RTU通讯协议和TCP/UDP协议的区别

1、Modbus协议属于应用层（OSI模型第7层）协议，TCP/UDP协议属于传输层（OSI模型第4层）协议，两者层级不是并列关系。

打个比喻，Modbus协议就像公司里的总经理，TCP/UDP协议就像公司里的轿车、商务车。某天总经理要到机场去乘飞机，他可以选择∶1）自己开轿车去，2）让司机开商务车送去，3）搭的士/公交车过去。若选择1），那就是总经理-轿车的关系，Modbus TCP协议就形同这种关系。若选择3），就形同另外的Modbus RTU/ASCI协议的关系。

2、Modbus协议是一种已广泛应用于当今工业控制领域的通用通讯协议。通过此协议，控制器相互之间、或控制器经由网络（如以太网）可以和其它设备之间进行通信。Modbus协议使用的是主从通讯技术，即由主设备主动查询和操作从设备。一般将主控设备方所使用的协议称为Modbus Master，从设备方使用的协议称为Modbus Slave。典型的主设备包括工控机和工业控制器等；典型的从设备如PLC可编程控制器等。Modbus通讯物理接口可以选用串口（包括RS232和RS485），也可以选择以太网口。

3、而Modbus TCP协议则是在RTU协议上加一个MBAP报文头，由于TCP是基于可靠连接的服务，RTU协议中的CRC校验码就不再需要，所以在Modbus TCP协议中是没有CRC校验码，用一句比较通俗的话说就是∶Modbus TCP协议就是Modbus RTU协议在前面加上五个0以及一个6，然后去掉两个CRC校验码字节就OK.虽然这句话说得不是特别准确，但是也基本上把RTU与TCP之间的区别说得比较清楚了。

