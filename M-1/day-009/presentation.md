## **Git Branch 전략 (Git Branch Strategy) 이란?**

#### **Git Branch 전략의 개요**

- Git Branch 전략은 Git Flow, Github Flow가 있다. Gitlab Flow도 있지만, Github Flow와 유사하므로 다루지 않겠음.
- Git Branch 전략이란, Git을 사용할 때 Branch를 어떻게 구성하고 사용할 것인지에 대한 것.
- 즉, Git Branch를 보다 효과적으로 관리하기 위한 Workflow의 일종임.
- 이는 협업 중 충돌이나 혼선을 방지하고, Branch의 출처와 분기점을 명확히 하기 위하여 주로 사용됨.

---

## **Git Flow 전략 (Git Flow Strategy)**

#### **개요**

- Git Flow는 2010년에 **Vincent Driessen**이 제안한 Git Branch 전략 중 하나임.
- Git Flow는 Github Flow와는 달리, 브랜치를 **5가지 종류**로 나누어 관리함.

####

**Git Flow의 5가지 종류의 Branch**

- Git Flow는 5가지 종류의 Branch를 사용함.
- 이는 각각의 Branch가 어떤 역할을 하는지를 명확히 하기 위함임.
- Git Flow의 5가지 종류의 Branch는 다음과 같음.  
  **1. \[ Main \]** Master Branch : 마스터 브랜치.  
  **2\. \[ Dev \]** Develop Branch : 다음 출시 버전을 개발하는 Branch  
  **3\. \[ Supporting \]** Feature Branch : 기능을 개발하는 Branch  
  **4\. \[ Supporting \]** Release Branch : 이번 출시 버전을 관리하는 Branch  
  **5\. \[ Supporting \]** Hotfix Branch : 출시 버전에서 발생한 긴급한 버그를 수정하는 Branch
- 이 중, Master(Main)과 Develop Branch는 반드시 존재해야 하며,  
  나머지 Supporting Branch는 필요에 따라 생성하고 삭제함.
- Supporting Branch를 통해 기능 개발, 버전 관리, 긴급한 버그 수정을 수행함.
- 잘 분리된 Branch의 용도를 통해 팀이 병렬적인 업무를 사용할 수 있도록 도와줌.

#### **Git Flow의 전략적인 장점**

- 브랜치를 용도별로 (기능 개발, 출시 버전 관리, 긴급한 버그 수정) 나누어 관리함으로써,  
  병렬적으로 작업하더라도 협업 중 충돌이나 혼선을 방지할 수 있음.
- release 브랜치를 통해 테스트와 QA(Quality Assurance)가 수행된 뒤,  
  충분한 검증을 통해 Master 브랜치에 병합함으로써, 출시 버전의 안정성을 보장할 수 있음.
- Version Tag를 통해 출시 버전을 관리함으로써, 출시 버전의 이력을 관리할 수 있음.  
  때에 따라서는 롤백이나 특정 버전으로의 복원이 필요할 수 있는데, 그런 상황에서의 유용함을 제공함.
- Hotfix 브랜치를 통해 긴급한 버그 수정을 수행함으로써, 심각한 버그 혹은 보안 문제가 발생했을 때, 빠르게 대응할 수 있음.

#### **Git Flow의 전략적인 단점**

- 너무 다양한 브랜치 구조 때문에, 초기 설정시에 복잡하고 어려울 수 있음. 이때문에 소규모 프로젝트에서는 잘 사용되지 않음.
- QA(Quality Assurance)가 수행되는 과정과 테스트 절차가 복잡하여 출시 버전의 배포가 늦어질 수 있음.  
  이때문에 빠른 배포가 필요한 프로젝트에서는 잘 사용되지 않음.

#### **Git Flow가 사용되는 상황 혹은 시나리오**

- Git Flow는 출시 버전의 안정성을 보장해야 하는 대규모 프로젝트에서 사용됨.
- 명확하게 버전이 명시되어야 하는 프로젝트, 즉, 오픈소스 라이브러리나 프레임워크, 플랫폼 서비스 등에서 사용됨.
- 버전이 다양하게 존재하거나, 롤백이 잦은 경우, 버그를 수정하는일이 잦은 경우에 주로 사용됨.

---

## **Github Flow 전략 **(Github Flow Strategy)\*\*\*\*

#### **개요**

- Github Flow는 2011년에 Github에서 제안한 Git Branch 전략 중 하나임.
- Github Flow는 Git Flow와는 달리, 브랜치를 단 2가지 종류로 나누어 간단 명료하게 관리함.

#### **Github Flow의 2가지 종류의 Branch**

- Github Flow는 2가지 종류의 Branch를 사용함.
- Github Flow의 2가지 종류의 Branch는 다음과 같음.  
  **1\. Main** Branch : 마스터 브랜치. 여기에 Merge된 데이터들을 기반으로 Production Release가 이루어진다고 볼 수 있음.  
  **2\. Other** Branches : Main Branch를 기반으로 생성되는 Branch. 이름과 규칙은 자유롭게 정할 수 있다.  
      다만, 브랜치 명과 커밋 메시지 등을 자세히 작성하여 어떤 역할을 하는 Branch인지 명확히 해야 함.
- 이 중, Main Branch는 반드시 존재해야 하며, 나머지 Other Branch는 필요에 따라 생성하고 삭제함.
- Main Branch에는 항상 배포가 가능한 수준의 안정적인 (Stable) 상태의 코드가 존재해야 함.

#### **Github Flow의 Workflow 과정**

- **1.** Main Branch를 기반으로 새로운 Branch를 생성함.
- **2.** 생성된 Branch의 작업이 완료되면 테스트 후 Main Branch에 Pull Request를 생성함.
- **3.** 이것(Pull Request)에 대한 Code Review 및 피드백, 검증을 거침.
- **4.** 문제가 없는것을 확인한 뒤, Main Branch에 Merge함.
- **5.** Main Branch에 Merge된 데이터들을 기반으로 Production Release(CD/CI)를 통해 배포를 진행함.

#### **Github Flow의 전략적인 장점**

- 바로 파악 가능한 수준의 직관적임을 가지며, 간단하고 명료하기 때문에 소규모 프로젝트에서의 초기 설정이나 관리가 용이함.
- Production 상태에서의 Main Branch가 존재하므로, 지속적으로 배포가 가능함.
- Pull Request를 통한 Code Review를 통해, 빠르게 피드백을 제공할 수 있고, 이를 통해 코드의 유연성과 안정성을 보장할 수 있음.
- 각자 기능개발 혹은 버그 수정에 대한 Branch를 따로 생성하기 때문에, 병렬적인 업무를 수행하면서도 충돌의 위험이 적은 편임.

#### **Github Flow의 전략적인 단점**

- Main Branch 이외에는 작명과 규칙이 자유롭기 때문에, 대규모 프로젝트에서 사용할 경우,  
  Branch가 정리되지 않고 많아지면서 혼란을 야기할 수 있음.
- Pull Request를 통하여 바로 Main Branch에 Merge 하기때문에, 특수한 경우 잠재적으로 배포에 대한 위험성을 내재함.
- Github Flow에서는 초기 릴리즈 형태를 가져가며 Branch를 통해 기능을 개발하고 살을 붙이는 형태로 관리를 이어감.  
  따라서 Version Tag나 버전에 관한 Release를 별개로 관리하지 않기 때문에,  
  여러 버전을 관리하거나 롤백, 상세한 배포 관리에 있어서는 제어에 어려움이 있을 수 있음.

#### **Github Flow가 사용되는 상황 혹은 시나리오**

- Github Flow는 빠른 배포가 필요한 소규모 프로젝트에서 사용됨.
- 빠르게 새로운 배포가 필요한 프로젝트에서 주로 사용됨.
- Version과 Release에 대한 관리가 따로 필요하지 않은 프로젝트에서 주로 사용됨.

---

## **Git Flow vs Github Flow**

#### **Git Flow가 유리한 상황 혹은 시나리오**

- 규모가 큰 프로젝트
- 배포 주기가 잦지 않은 프로젝트
- 다양한 버전 관리가 필요한 어플리케이션 혹은 오픈소스 라이브러리/프레임워크 프로젝트
- 롤백 및 특정 버전으로의 복원이 필요한 경우가 요해지는 프로젝트

#### **Github Flow가 유리한 상황 혹은 시나리오**

- 비교적으로 규모가 작은 프로젝트
- 잦은 배포 주기를 가지는 프로젝트
- 다양한 버전 관리가 필요하지 않은 서비스 혹은 개인 프로젝트
- Version Tag의 관리 없이, 단일 버전 관리로도 충분한 프로젝트
