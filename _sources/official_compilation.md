# Official Compilation (OC)

The *Official Compilation (OC)* is according to the [lexicon of parliamentary terms](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=11#q=official) the compilation of primarily the federal constitution, federal acts and federal decrees.

This part explains all the important objects that build an entry in the Official Compilation and it does so with the help of the federal constitution as an example of an entry in the Official Compilation.

:::{admonition} Hint for legal laypersons
:class: hint
Entries in the Official Compilation do not represent something like a current consolidated version of a legislative resource but are some kind of "building blocks" of an actual legislative resource. Updates to a legal text are published as "deltas" to already existing texts - much like an additional commit in software development.

In distinction from the Official Compilation, the current consolidated legislative resources are modelled in the [Classified Compilation](classified_compilation.md).
:::

## Example

Throughout this sub-page, the federal constitution is used as an example of an entry in the Official Compilation.

- URI: https://fedlex.data.admin.ch/eli/oc/1999/404
- URL: https://www.fedlex.admin.ch/eli/oc/1999/404
- [Metadata viewer](https://fedlex.data.admin.ch/en-CH/metadata?value=https:%2F%2Ffedlex.data.admin.ch%2Feli%2Foc%2F1999%2F404)

## URI

The URI of an entry in the Official Compilation contains the following parts:

- Standard namespace and path: `https://fedlex.data.admin.ch/eli/`
- the part `oc/` denotes the Official Compilation, meaning that this URI identifies something that is part of the Official Compilation of the federal law
- `YYYY/` is the year of the publication
- `ID` an identifier that has no specific meaning

## General Structure

Every entry in the Official Compilation is of type jolux:Act.

:::{admonition} jolux:Act
:class: note
:name: Act
The owl:Class **jolux:Act** is used for entries in the Official Compilation and the Federal Gazette. It is of the same [abstraction level](abstraction_levels.md) as [jolux:Work](#Work) and all jolux:Act are also jolux:Work.
:::

For jolux:Act, the additional [abstraction levels](abstraction_levels.md) jolux:Expression and jolux:Manifestation are also available for all entries.

The following figure shows the general structure of an entry in the Official Compilation:

:::{figure-md} oc_general

<img src="img/oc_general.png" class="max-width-500">

General structure of an entry in the Official Compilation.
:::

As the jolux:Act is a very abstract representation of a legislative resource, there is e.g. no title of the law attached to the jolux:Act because this is something language specific and therefore added to the [jolux:Expression](#Expression) of the jolux:Act.

As the Official Compilation is released in a weekly bulletin, all jolux:Act are part of such a bulletin via [jolux:isPartOf](#isPartOf):

:::{admonition} jolux:isPartOf
:class: note
:name: isPartOf
The object property **jolux:isPartOf** is used to connect a [jolux:Act](#Act) to the weekly bulletin that it is part of.
:::

## Datatype Properties

- [jolux:publicationDate](#publicationDate)
- [jolux:dateEntryInForce](#dateEntryInForce)
- [jolux:dateDocument](#dateDocument)

## Object Properties

Object properties that point to a vocabulary entry:

- [jolux:processType](#procedure-types)
- [jolux:typeDocument](#text-types)
- [jolux:classifiedByTaxonomyEntry](#legal-taxonomy)
- [jolux:legalRessourceGenre](#act-types)
- [jolux:responsibilityOf](#legal-institution)

Object properties that point to an individual:

- [jolux:isRealizedBy](#isRealizedBy)
- [jolux:isPartOf](#isPartOf)

## SPARQL Examples

The following SPARQL query shows all the different jolux:Expression for the federal constitution:

```sparql
PREFIX jolux: <http://data.legilux.public.lu/resource/ontology/jolux#>
SELECT ?expression WHERE {
    <https://fedlex.data.admin.ch/eli/oc/1999/404> jolux:isRealizedBy ?expression.
}
```

The following SPARQL query shows all the different jolux:Manifestation for the federal constitution:

```sparql
PREFIX jolux: <http://data.legilux.public.lu/resource/ontology/jolux#>
SELECT ?manifestation WHERE {
    <https://fedlex.data.admin.ch/eli/oc/1999/404> jolux:isRealizedBy ?expression.
    ?expression jolux:isEmbodiedBy ?manifestation.
}
```

The following SPARQL query shows all the different jolux:Act that have the legal genre "Basic legislation" and are not yet in force.

```sparql
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX jolux: <http://data.legilux.public.lu/resource/ontology/jolux#>
SELECT ?act ?date WHERE {
    ?act jolux:legalResourceGenre <https://fedlex.data.admin.ch/vocabulary/legal-resource-genre/100>;
         jolux:dateEntryInForce ?date.
  FILTER(?date > xsd:date(NOW()))
}
```
