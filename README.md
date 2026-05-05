# Equipment Rental Executive Dashboard

A Power BI engineering portfolio case study for **NorthPeak Equipment Rentals**, a fictional branch based equipment rental business.

Live site: https://mtrivedilu.github.io/Equipment-Rental/

This project demonstrates more than dashboard design. It shows how a Power BI solution can be supported by a clean semantic model, reusable DAX measures, dynamic row level security, performance review, Power BI Service publishing, and AI ready semantic metadata.

---

## Project Purpose

This repository contains a static portfolio website built to present an end to end Power BI case study.

The goal of the project is to demonstrate senior BI development thinking across:

- Semantic model design
- Star schema modeling
- DAX measure engineering
- Time intelligence
- Dynamic row level security
- Power BI Service publishing
- Performance Analyzer review
- AI readiness for Copilot, Q&A, and Fabric data agents
- Production architecture thinking for Microsoft Fabric and enterprise BI environments

The website is designed for recruiters, hiring managers, BI leaders, Power BI developers, and analytics architects who want to evaluate the technical depth behind the report.

---

## Important Demo Disclaimer

**NorthPeak Equipment Rentals is a fictional demo company.**

This project uses synthetic demo data and a public Power BI embed. No confidential, proprietary, or real company data is used.

The public Power BI embed is intended for portfolio demonstration only. Public publish to web is anonymous, so user specific row level security is not enforced in the embedded public view. In a production environment, authenticated Power BI Apps, secure embed, or Power BI Embedded would be used so RLS is enforced for each viewer.

---

## Live Links

| Resource | Link |
|---|---|
| Live Portfolio Website | https://mtrivedilu.github.io/Equipment-Rental/ |
| Power BI Public Report | https://app.powerbi.com/view?r=eyJrIjoiMzg5NGJiMWItNmIyOC00MDBlLTkzZDUtOWUxOTIwOWVhNDIzIiwidCI6ImJkMTlkMDI5LTAyZWItNDk5Yi05NTMzLTk0MDhjZTk3OWJiYiJ9 |
| Google Sheet Source Data | https://docs.google.com/spreadsheets/d/1dtrb-VHVmBbxpXFAfDgzaimVbW-TI7t5BndNDbbMVEE/edit?gid=359496034#gid=359496034 |
| Portfolio | https://www.mihirtrivedi.tech |
| LinkedIn | https://linkedin.com/in/mihirtrivedigm |

---

## Headline Dashboard Metrics

The Power BI report presents an executive overview of a fictional equipment rental business.

| KPI | Value |
|---|---:|
| Total Revenue | $224.7K |
| Gross Margin | $131.1K |
| Gross Margin % | 58.4% |
| Rental Count | 213 |
| Utilization % | 68.5% |

---

## Main Report Visuals

The dashboard includes:

- KPI cards for executive monitoring
- Equipment Category Performance matrix
- Revenue Trend by Month line chart
- Revenue by Branch bar chart
- Slicers for YearMonth, Region, Category, and Segment

The report is intentionally focused and executive friendly. The purpose is not to overload the page with visuals, but to show clear business monitoring backed by a governed semantic model.

---

## Repository Structure

```text
Equipment-Rental/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

### index.html

Contains the full website structure and content, including:

- Hero section
- Live Power BI report embed
- Source data section
- Semantic model architecture
- Implemented scope
- DAX and KPI engineering
- Dynamic RLS explanation
- Performance review
- AI readiness
- Production extensions
- About section

### styles.css

Contains the full responsive visual design, including:

- Premium dark and light sections
- Sticky navigation
- Hero styling
- Metric cards
- Tabs
- Semantic model diagram
- Code blocks
- Responsive iframe container
- Roadmap cards
- Mobile layout
- Scroll reveal animation classes

### script.js

Contains the website interactions, including:

- Mobile menu
- Smooth scrolling
- Active navigation state
- Tab switching
- Copy code buttons
- Metric count up animation
- Scroll reveal animation
- Back to top button
- Subtle parallax behavior

---

## Technology Stack

### Website

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

### BI and Analytics

- Power BI Desktop
- Power BI Service
- Power Query
- DAX
- Power BI semantic model
- Performance Analyzer
- Dynamic Row Level Security
- Public Power BI publish to web embed

### Production Concepts Referenced

The project also explains how this demo could be extended in a real enterprise environment using:

- Microsoft Fabric
- OneLake
- Fabric Lakehouse
- Fabric Warehouse
- Direct Lake
- Medallion architecture
- Gold layer dimensional models
- Dataflows Gen2
- Fabric Data Factory
- dbt
- Spark notebooks
- Cloud data warehouses such as Snowflake, BigQuery, Redshift, Databricks, Azure Synapse, PostgreSQL, SQL Server, or Fabric Warehouse
- Git integration
- TMDL
- Deployment pipelines
- Monitoring Hub
- Capacity metrics
- Fabric data agents
- Copilot ready semantic models

These production items are described as possible extensions. They are not presented as fully implemented in this demo.

---

## Power BI Semantic Model

The Power BI model follows a clean star schema.

### Fact Table

| Table | Purpose |
|---|---|
| FactRentalsTable | Central rental transaction fact table |

### Dimension Tables

| Table | Purpose |
|---|---|
| DimDateTable | Date and reporting period dimension |
| DimCustomerTable | Customer, segment, industry, and location attributes |
| DimBranchTable | Branch, province, district, and region attributes |
| DimEquipmentTable | Equipment, category, subcategory, and rate attributes |
| DimSalesRepTable | Sales representative attributes |
| SecurityUsersTable | Region based user security mapping for dynamic RLS |

### Model Design Decisions

The model was designed with the following principles:

- FactRentalsTable is the central transaction grain.
- Dimensions provide business slicing.
- Relationships are one to many from dimensions into the fact table.
- Single direction filtering keeps model behavior predictable.
- DimDateTable was marked as the official date table.
- A dedicated `_Measures` table centralizes DAX measures.
- Technical keys and raw fact columns were hidden from report users.
- Business friendly fields and certified measures were exposed.
- SecurityUsersTable supports dynamic RLS.
- Measure descriptions and synonyms were added to improve AI readiness.

---

## Implemented in This Demo

The following items were actually implemented in the Power BI demo:

- Power Query import from Excel based source data
- Data type validation
- Clean star schema semantic model
- FactRentalsTable as the central fact table
- Dimension tables for date, customer, branch, equipment, and sales rep
- Relationship cleanup after import
- Single direction filtering model
- Marked DimDateTable as the official date table
- Created a dedicated `_Measures` table
- Created reusable DAX measures
- Created financial, operational, and time intelligence KPIs
- Hidden technical keys and raw fact fields from report view
- Business friendly fields exposed for users
- Dynamic region based RLS using SecurityUsersTable
- RLS testing in Power BI Desktop using View As
- Power BI Service publishing
- Public Power BI web embed for demo viewing
- Performance Analyzer review
- Semantic model descriptions and synonyms for AI readiness

---

## DAX and KPI Engineering

The project uses reusable DAX measures grouped into financial, operational, and time intelligence logic.

### Financial KPIs

- Total Revenue
- Rental Revenue
- Service Revenue
- Damage Waiver Revenue
- Estimated Cost
- Gross Margin
- Gross Margin %

### Operational KPIs

- Rental Count
- Cancelled Rental Count
- Average Daily Rate
- Total Utilization Hours
- Total Available Hours
- Utilization %
- Revenue per Rental

### Time Intelligence KPIs

- Total Revenue YTD
- Gross Margin YTD
- Rental Count YTD
- Previous Month Revenue
- Revenue MoM Change
- Revenue MoM %
- Previous Month Gross Margin %
- Gross Margin % MoM Change

---

## Example DAX Measures

### Total Revenue

```DAX
Total Revenue =
CALCULATE(
    SUM(FactRentalsTable[TotalRevenue]),
    FactRentalsTable[IsCancelled] = FALSE()
)
```

### Gross Margin %

```DAX
Gross Margin % =
DIVIDE(
    [Gross Margin],
    [Total Revenue]
)
```

### Utilization %

```DAX
Utilization % =
DIVIDE(
    [Total Utilization Hours],
    [Total Available Hours]
)
```

### Revenue MoM %

```DAX
Revenue MoM % =
DIVIDE(
    [Revenue MoM Change],
    [Previous Month Revenue]
)
```

### Why This Matters

The DAX layer is designed around reusable, certified business measures. Instead of placing ad hoc calculations in individual visuals, KPI logic is centralized in the semantic model. This improves consistency, governance, maintainability, and trust.

---

## Dynamic Row Level Security

The model includes dynamic region based row level security.

The security model uses:

- `SecurityUsersTable[Email]`
- `SecurityUsersTable[Region]`
- `SecurityUsersTable[RoleName]`
- `USERPRINCIPALNAME()`

### RLS Flow

```text
User opens report
        ↓
USERPRINCIPALNAME() captures email
        ↓
SecurityUsersTable maps email to allowed region
        ↓
DimBranchTable filters allowed branches
        ↓
FactRentalsTable returns permitted rental transactions
```

### RLS DAX Logic

```DAX
VAR CurrentUser =
    USERPRINCIPALNAME()

VAR AllowedRegion =
    LOOKUPVALUE(
        SecurityUsersTable[Region],
        SecurityUsersTable[Email], CurrentUser
    )

RETURN
    AllowedRegion = "All"
        || DimBranchTable[Region] = AllowedRegion
```

### RLS Validation Results

| Test User | Expected Access | Result |
|---|---|---|
| executive@cooper-demo.ca | All regions | Full demo revenue, about $224.7K |
| central.manager@cooper-demo.ca | Central region only | Central filtered revenue, about $88.3K |
| west.manager@cooper-demo.ca | West region only | West filtered revenue, about $61.4K |

### Public Embed Note

The public web version uses Power BI publish to web. Publish to web is anonymous, so user specific RLS is not enforced in the public embed.

In production, this would be handled through:

- Power BI App distribution
- Secure embed
- Power BI Embedded
- Authenticated users
- Entra ID or Microsoft 365 groups assigned to RLS roles
- Viewer level consumption so RLS is enforced correctly

---

## Performance Analyzer Review

The report was reviewed using Power BI Performance Analyzer.

### Findings

- No major DAX bottleneck was found.
- Query execution was lightweight for the demo dataset.
- The Equipment Category Performance matrix was the heaviest visual because it displays multiple measures.
- KPI cards generate separate visual queries, which is acceptable for this small executive dashboard.
- The first optimization priority would be visual simplification before rewriting DAX.

### Production Performance Path

For a larger production model, the optimization workflow could include:

- DAX Studio
- VertiPaq Analyzer
- Column cardinality review
- Removal of unused columns
- Aggregation tables
- Incremental refresh
- Calculation groups
- Field parameters
- Report page optimization
- Upstream SQL or dbt optimization
- Monitoring Hub and capacity metrics
- Refresh history and service diagnostics

---

## AI Ready Semantic Model

The project includes AI readiness concepts because modern Power BI development is increasingly connected to Copilot, Q&A, and Fabric data agents.

AI readiness is not only about enabling Copilot. It starts with semantic model quality.

### AI Readiness Work Completed

- Technical fields were hidden from report users.
- Certified measures were exposed through `_Measures`.
- Measure descriptions were added.
- Synonyms were added for business language.
- Business friendly field names were used.
- The model follows a clean star schema.
- KPI definitions are explicit and reusable.
- Natural language question patterns were considered.

### Example Metadata

| Field or Measure | Description or Synonyms |
|---|---|
| Total Revenue | Total revenue from non cancelled rental transactions, including rental, service, and damage waiver revenue |
| Total Revenue Synonyms | revenue, sales, total sales, rental sales |
| Gross Margin % | Gross margin divided by total revenue, used to evaluate profitability |
| Gross Margin % Synonyms | margin percent, profitability, profit rate |
| BranchName Synonyms | branch, location, depot, rental location |
| Category Synonyms | equipment category, fleet category, equipment type |
| CustomerName Synonyms | customer, account, client |
| YearMonth Synonyms | reporting month, period, month period |

### Example Natural Language Questions

The model is prepared to support business questions such as:

- What is total revenue by branch?
- Show gross margin percent by equipment category.
- Show utilization by equipment category.
- Show rental count by month.
- Show revenue by region.

### Why This Matters

AI tools perform better when the semantic model is governed, clear, and business friendly. Hidden technical fields, certified measures, descriptions, synonyms, and clean relationships help tools like Copilot, Q&A, and Fabric data agents answer questions using approved business definitions instead of guessing from raw columns.

---

## Production Extensions and Architecture Possibilities

The current demo intentionally focuses on the Power BI semantic and reporting layer.

In a real enterprise environment, the same design could be extended with a scalable cloud data platform, curated gold layer, deployment pipelines, monitoring, and AI enabled analytics.

The following items are production possibilities, not claims that they were fully implemented in this demo.

### Microsoft Fabric and OneLake

In a production version, source data could land in a Microsoft Fabric lakehouse with OneLake acting as the unified storage layer.

### Medallion Architecture

A production version could use a medallion architecture:

| Layer | Purpose |
|---|---|
| Bronze | Raw ingested operational data |
| Silver | Cleaned, standardized, and conformed data |
| Gold | Curated dimensional model for Power BI semantic models |

### Direct Lake, Import, or Composite Model

This demo does not implement Direct Lake. However, the semantic model design is compatible with a Fabric gold layer feeding a Direct Lake model.

In production, the choice between Direct Lake, Import, and Composite should depend on:

- Data size
- Latency needs
- Licensing
- Security
- Performance
- Refresh requirements
- User concurrency
- Operational complexity

### Scalable ETL and ELT Pipelines

Power Query is acceptable for this portfolio demo. In production, the data pipeline could be implemented using:

- Fabric Data Factory
- Dataflows Gen2
- Azure Data Factory
- dbt
- SSIS
- Spark notebooks
- SQL based transformations

### Cloud Data Warehousing Options

A similar semantic model could sit on top of curated analytical data from:

- Microsoft Fabric Warehouse
- Fabric Lakehouse SQL endpoint
- Azure Synapse
- Snowflake
- BigQuery
- Redshift
- Databricks
- PostgreSQL
- SQL Server

### Semantic Model Standards

For enterprise scale, the model could be extended with:

- Calculation groups
- Field parameters
- Display folders
- Measure descriptions
- Synonyms
- Tabular Editor
- TMDL
- Git integration
- Deployment pipelines
- Dev, test, and prod workspaces
- Certified semantic models
- Version controlled releases

### Security and Governance

In production, security could include:

- Entra ID group based RLS
- Microsoft 365 security groups
- Object level security
- Workspace role discipline
- Certified datasets
- Endorsement standards
- Power BI Apps
- Secure embedding
- Auditing and usage metrics

### Monitoring and Adoption

A production BI solution should be monitored through:

- Monitoring Hub
- Refresh history
- Usage metrics
- Capacity metrics
- Service diagnostics
- Failure alerts
- Power BI REST API automation
- Adoption reporting
- Semantic model quality checks

### AI Enabled Analytics

The model could be extended for:

- Copilot
- Q&A
- Verified answers
- AI instructions
- Fabric data agents
- Governed natural language analytics

---

## What This Case Study Demonstrates

This case study is intended to demonstrate the following senior BI capabilities:

### Semantic Model Engineering

Dimensional design, relationship cleanup, field hygiene, and predictable model behavior.

### Governed KPI Design

Reusable DAX measures, explicit definitions, and auditable metric logic.

### Secure Analytics

Dynamic RLS design and production awareness around authenticated sharing, group based access, and OLS.

### Performance Awareness

Performance Analyzer review, visual level tuning priorities, and future scale patterns.

### AI Ready Modeling

Semantic descriptions, synonyms, certified measures, and natural language readiness for Copilot and Fabric data agents.

### Executive Storytelling

A focused executive view that links revenue, profitability, utilization, branch performance, and fleet category patterns.

### Production Thinking

A clear extension path across Fabric, OneLake, medallion architecture, deployment pipelines, monitoring, and governance.

### Stakeholder Communication

A technical case study that translates model design into business value.

---

## How to Run Locally

This is a static website. No build process is required.

### Option 1: Open Directly

1. Clone or download the repository.
2. Open `index.html` in a browser.

### Option 2: Use a Local Server

If you want a local development server, use one of the following options.

#### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

#### VS Code Live Server

1. Open the folder in VS Code.
2. Install the Live Server extension.
3. Right click `index.html`.
4. Select `Open with Live Server`.

---

## GitHub Pages Deployment

The live site is currently published through GitHub Pages.

### Deployment Steps

1. Push the project files to a GitHub repository.
2. Go to the repository settings.
3. Open the Pages section.
4. Choose the branch, usually `main`.
5. Select the root folder.
6. Save the GitHub Pages settings.
7. Wait for GitHub to publish the site.
8. Open the generated GitHub Pages URL.

Current live URL:

```text
https://mtrivedilu.github.io/Equipment-Rental/
```

---

## How to Update the Power BI Embed

If the Power BI report is republished or the public embed link changes:

1. Open `index.html`.
2. Search for `app.powerbi.com/view?r=`.
3. Replace the existing Power BI public report URL with the new URL.
4. Save the file.
5. Commit and push changes to GitHub.
6. GitHub Pages will update the live site.

---

## How to Update the Source Data Link

If the Google Sheet source changes:

1. Open `index.html`.
2. Search for the existing Google Sheet URL.
3. Replace it with the new source data link.
4. Save, commit, and push.

---

## Interview Discussion Guide

This project can be used to explain several senior Power BI concepts.

### 1. Why Star Schema?

A star schema keeps filtering predictable, improves performance, and makes the model easier for users, developers, and AI tools to understand.

### 2. Why a Dedicated Measures Table?

A dedicated `_Measures` table centralizes KPI definitions, reduces duplication, and makes the model easier to maintain.

### 3. Why Hide Technical Fields?

Report users should work with business friendly fields and certified measures, not raw keys, IDs, and intermediate columns.

### 4. Why Dynamic RLS?

Dynamic RLS scales better than creating one static role per region. Security rules are data driven through a mapping table.

### 5. Why Performance Analyzer?

Performance Analyzer helps separate DAX query time, visual rendering time, and other overhead so optimization work is evidence based.

### 6. Why AI Readiness?

Copilot, Q&A, and Fabric data agents need clean semantic metadata. Descriptions, synonyms, certified measures, and governed relationships help AI tools return more accurate business answers.

### 7. What Would Change in Production?

A production version could add Fabric lakehouse or warehouse integration, medallion architecture, Direct Lake where appropriate, incremental refresh, deployment pipelines, Entra ID group based security, Monitoring Hub, and certified semantic model governance.

---

## Future Enhancements

Potential future enhancements include:

- Add a short project video walkthrough
- Add screenshots for each major Power BI development step
- Add a downloadable architecture diagram
- Add a PBIX download link if appropriate
- Add sample performance analyzer export notes
- Add a Fabric version of the architecture
- Add deployment pipeline screenshots
- Add a Power BI App sharing explanation
- Add a Tabular Editor and TMDL extension example
- Add a mock data pipeline diagram

---

## About the Developer

**Mihir Trivedi** is a BI Developer and senior Power BI candidate with experience across Power BI, SQL, semantic modeling, data warehousing, Tableau, PostgreSQL, Power Platform, stakeholder reporting, and executive analytics.

This project was created as a public technical case study to demonstrate how dashboards can be backed by governed semantic models, reusable metrics, secure access patterns, performance validation, and AI ready metadata.

- Portfolio: https://www.mihirtrivedi.tech
- LinkedIn: https://linkedin.com/in/mihirtrivedigm
- Email: mtrivedi@laurentian.ca

---

## License and Usage

This repository is intended for portfolio and demonstration purposes.

The fictional company name, demo data, and Power BI report are used only to demonstrate BI engineering concepts. No real company data is included.

If you reuse this structure, please replace the project links, company name, dataset, and personal information with your own.

---

## Summary

This project shows how a Power BI report can be presented as a complete BI engineering case study.

It combines:

- A live Power BI dashboard
- A public website
- A documented semantic model
- Reusable DAX measures
- Dynamic RLS explanation
- Performance Analyzer review
- AI readiness metadata
- Production architecture extension ideas

The main takeaway:

**A strong Power BI developer does not only build visuals. A strong Power BI developer engineers trusted, secure, reusable, performant, and AI ready analytics products.**