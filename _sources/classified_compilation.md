# Classified Compilation (CC)

The *Classified Compilation (CC)* (also known as Systematic Compilation) is according to the [lexicon of parliamentary terms](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=216) a regularly updated and revised collection of the legislative resources of the Official Compilation arranged under subject headings.

An important aspect of the Classified Compilation is the classification of the entries according to a legal taxonomy. A deeper explanation of the Classified Compilation is also available in [German](https://www.fedlex.admin.ch/de/cc/explanations-cc)/[French](https://www.fedlex.admin.ch/fr/cc/explanations-cc)/[Italian](https://www.fedlex.admin.ch/it/cc/explanations-cc).

This part explains all the important objects that build an entry in the Classified Compilation and it does so with the help of the federal constitution as an example of an entry in the Classified Compilation.

:::{admonition} Hint for legal laypersons
:class: hint
Entries in the Classified Compilation are consolidations of entries in the Official Compilation. The main reason for having a Classified Compilation is a better usability of the legislative resources because the Classified Compilation represents the current state of a legislative resource.

It is important to realize that the Classified Compilation is not legally binding, the source of the "true law" is always the Official Compilation.
:::

## Example

Throughout this sub-page, the federal constitution is used as an example of an entry in the Classified Compilation.

- URI: https://fedlex.data.admin.ch/eli/cc/1999/404
- URL: https://www.fedlex.admin.ch/eli/cc/1999/404
- [Metadata viewer](https://fedlex.data.admin.ch/en-CH/metadata?value=https:%2F%2Ffedlex.data.admin.ch%2Feli%2Fcc%2F1999%2F404)

## URI

The URI of an entry in the Classified Compilation contains the following parts:

- Standard namespace and path: `https://fedlex.data.admin.ch/eli/`
- the part `cc/` denotes the Classified Compilation, meaning that this URI identifies something that is part of the Classified Compilation of the federal law
- `YYYY/` is the year of the publication
- `ID` an identifier that has no specific meaning

## General Structure

Every entry in the Classified Compilation is of type jolux:ConsolidationAbstract.

:::{admonition} jolux:ConsolidationAbstract
:class: note
:name: ConsolidationAbstract
The owl:Class **jolux:ConsolidationAbstract** is used for entries in the Classified Compilation.

It is a consolidation because it consolidates different entries from the Official Compilation into a single document that shows the current state. The term *abstract* is not so much meant as a summary but as an abstraction.
:::

A jolux:ConsolidationAbstract has a jolux:Expression attached for representing the title and abbreviation in different languages of this consolidation because this does not change. But there are no jolux:Manifestation these only exist for jolux:Consolidation.

:::{admonition} jolux:Consolidation
:class: note
:name: Consolidation
The owl:Class **jolux:Consolidation** is used for versions that represent a jolux:ConsolidationAbstract at a specific time. It is of the same [abstraction level](abstraction_levels.md) as [jolux:Work](#Work) and all jolux:Consolidation are also jolux:Work.

The different jolux:Consolidation are no "deltas" of the changes but always the complete state a the specific point in time.
:::

For jolux:Consolidation, the additional [abstraction levels](abstraction_levels.md) jolux:Expression and jolux:Manifestation are also available for all entries.

The connection between jolux:Consolidation and jolux:ConsolidationAbstract is made with jolux:isMemberOf.

:::{admonition} jolux:isMemberOf
:class: note
:name: isMemberOf
The object property **jolux:isMemberOf** is used to connect a [jolux:Consolidation](#Consolidation) to a [jolux:ConsolidationAbstract](#ConsolidationAbstract). It is also used to connect the weekly bulletins of the Official Compilation to the yearly collection.
:::

Each jolux:ConsolidationAbstract is based on an jolux:Act through jolux:basicAct.

:::{admonition} jolux:basicAct
:class: note
:name: basicAct
The object property **jolux:basicAct** is used to connect a [jolux:ConsolidationAbstract](#ConsolidationAbstract) to a [jolux:Act](#Act). The connected act is the first version of the consolidation.
:::

The following figure shows the general structure of an entry in the Classified Compilation:

:::{figure-md} cc_general
![](img/cc_general.svg)

General structure of an entry in the Classified Compilation.
:::

## Legal Taxonomy

As the name Classified Compilation suggests, there is a classification scheme that sorts the entries in the Classified Compilation according to a legal taxonomy. This taxonomy is hierarchical and formulated as [vocabulary](vocabularies.md#legal-taxonomy).

## Datatype Properties

### jolux:ConsolidationAbstract

- [jolux:dateEntryInForce](#dateEntryInForce)
- [jolux:dateDocument](#dateDocument)

### jolux:Consolidation

- [jolux:publicationDate](#publicationDate)
- [jolux:dateApplicability](#dateApplicability)

## Object Properties

### jolux:ConsolidationAbstract

Object properties that point to a vocabulary entry:

- [jolux:typeDocument](vocabularies.md#text-types)
- [jolux:classifiedByTaxonomyEntry](vocabularies.md#legal-taxonomy)
- [jolux:inForceStatus](vocabularies.md#enforcement-status)

Object properties that point to an individual:

- [jolux:basicAct](#basicAct)
- [jolux:isRealizedBy](#isRealizedBy)

### jolux:Consolidation

Object properties that point to an individual:

- [jolux:isMemberOf](#isMemberOf)
- [jolux:isRealizedBy](#isRealizedBy)

## SPARQL Examples

The following SPARQL query shows all the different versions of the federal constitution:

```sparql
PREFIX jolux: <http://data.legilux.public.lu/resource/ontology/jolux#>
SELECT * WHERE {
	?consolidation jolux:isMemberOf <https://fedlex.data.admin.ch/eli/cc/1999/404>.
}
```

The following SPARQL query gives the PDF link to the latest version of the constitution in English through a chain to jolux:Consolidation, jolux:Expression and jolux:Manifestation:

```sparql
PREFIX jolux: <http://data.legilux.public.lu/resource/ontology/jolux#>
SELECT * WHERE {
	?work jolux:isMemberOf <https://fedlex.data.admin.ch/eli/cc/1999/404>;
                jolux:dateApplicability ?date;
                jolux:isRealizedBy ?expression.
  ?expression jolux:language <http://publications.europa.eu/resource/authority/language/ENG>;
              jolux:isEmbodiedBy ?manifestation.
  ?manifestation jolux:format <http://publications.europa.eu/resource/authority/file-type/PDF>;
                 jolux:isExemplifiedBy ?url.
} ORDER BY DESC(?date)
LIMIT 1
```