SELECT    *
FROM EMP;

SELECT * 
FROM DEPT;

SELECT ENAME,SAL,COMM,SAL*12,SAL*12+NVL(COMM,0)
FROM EMP;

SELECT ENAME,SAL,COMM,SAL*12 as ����,SAL*12+NVL(COMM,0) as Ŀ�̼����Կ���
FROM EMP;

select deptno �μ���ȣ, dname �μ���, loc �ٹ�����
from dept;

select distinct deptno
from emp;

select job
from emp;

select distinct job
from emp;
