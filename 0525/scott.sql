SELECT    *
FROM EMP;

SELECT * 
FROM DEPT;

SELECT ENAME,SAL,COMM,SAL*12,SAL*12+NVL(COMM,0)
FROM EMP;

SELECT ENAME,SAL,COMM,SAL*12 as 연봉,SAL*12+NVL(COMM,0) as 커미션포함연봉
FROM EMP;

select deptno 부서번호, dname 부서명, loc 근무지역
from dept;

select distinct deptno
from emp;

select job
from emp;

select distinct job
from emp;
