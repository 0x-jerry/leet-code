# 位运算

一共有四个位运算

1. not: 取反
2. or: 按位或
3. and: 按位与
4. xor: 按位异或

## not (`~`)

每一位取相反的值，例如

```
not	0101
---------
		1010
```

## or (`|`)

只要有一个 1，则取 1，例如

```
		1010
or	1110
---------
		1110
```

## and (`&`)

同为 1， 则取 1，例如

```
		1010
and 0110
---------
		0010
```

## xor (`^`)

不同则为 1， 相同则取 0， 例如

```
		1010
xor	0110
--------
		1100
```
