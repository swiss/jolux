# Subdivisions

To structure a legislative resource further, jolux:LegalResourceSubdivision is used:

:::{admonition} jolux:LegalResourceSubdivision
:class: note
:name: LegalResourceSubdivision
The class **jolux:LegalResourceSubdivision** is used to structure each legislative resource into units: Article (basic unit) and elements above and below this in the hierarchy, as well as annexes and other elements. The concrete unit is attached by using [jolux:legalResourceSubdivisionType](vocabularies.md#subdivision-types).
:::

## Example

Throughout this sub-page, the following jolux:LegalResourceSubdivision is used as an example.

- URI: https://fedlex.data.admin.ch/eli/cc/1999/404/text
- URL: No URL available for jolux:LegalResourceSubdivision
- [Metadata viewer](https://fedlex.data.admin.ch/de-CH/metadata?value=https:%2F%2Ffedlex.data.admin.ch%2Feli%2Fcc%2F1999%2F404%2Ftext)

## URI

The URI of a jolux:LegalResourceSubdivision contains the following parts:

- it starts with the URI of the entry in the Official or Consolidated Compilation
- `/type` denotes the type of the subdivision

## General Structure

The following figure shows the general structure of a jolux:LegalResourceSubdivision:

:::{figure-md} subdivision
![](img/subdivision.svg)

General structure of a jolux:LegalResourceSubdivision.
:::

The jolux:LegalResourceSubdivision is bound to a jolux:Work through jolux:legalResourceSubdivisionIsPartOf.

:::{admonition} jolux:legalResourceSubdivisionIsPartOf
:class: note
:name: legalResourceSubdivisionIsPartOf
The property **jolux:legalResourceSubdivisionIsPartOf** is used to connect a jolux:LegalResourceSubdivision with its [jolux:Work](#Work).
:::

The jolux:LegalResourceSubdivision have a type from the [subdivision types vocabulary](vocabularies.md#subdivision-types).

:::{admonition} Hint for legal laypersons
:class: hint
With help of jolux:LegalResourceSubdivision, it is possible to divide a legislative resource also on the level of the individual [articles](https://fedlex.data.admin.ch/de-CH/metadata?value=https:%2F%2Ffedlex.data.admin.ch%2Fvocabulary%2Fsubdivision-type%2Fart). But this is not systematically done (yet). The single articles are only modelled when it is necessary for a [jolux:LegalResourceImpact](#LegalResourceImpact) (see [SPARQL examples](#sparql-examples) below).
:::

## Object Properties

- [jolux:legalResourceSubdivisionType](vocabularies.md#subdivision-types)
- [jolux:legalResourceSubdivisionIsPartOf](#legalResourceSubdivisionIsPartOf)

## SPARQL Examples

The following query shows all the subdivisions of the federal constitution in the Classified Compilation with its types:

```sparql
PREFIX jolux: <http://data.legilux.public.lu/resource/ontology/jolux#>
SELECT * WHERE {
  ?subdivison jolux:legalResourceSubdivisionIsPartOf <https://fedlex.data.admin.ch/eli/cc/1999/404>;
  	jolux:legalResourceSubdivisionType ?type.
}
```