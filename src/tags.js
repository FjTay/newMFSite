import React, { useState } from "react";
import ReduceTag from "./ReduceTag";
import { useHistory } from "react-router-dom";
import TagsData from "./tagsData";
import TagZone from "./tagZone";
import Button from "./button";

const Tags = (props) => {

    const history = useHistory()
    const tagList = []
    const [filters, setFilters] = useState({})

    const handleFilters = (key, value) => {
        if(!filters.hasOwnProperty(key)) {
            filter({...filters, [key] : [value]})
        } else {
            console.log(key, value)
            if (filters[key].indexOf(value) === -1) {
                filter({...filters, [key] : [...filters[key], value]})
            } else {
                if(filters[key].length === 1) {
                    let {[key]:_, ...newFilters} = filters
                    Object.keys(filters).length === 1 ? reinitTags() : filter(newFilters)
                } else {
                    filter({...filters, [key] : filters[key].filter((item) => item !== value)})
                }
            }
        }
    }

    const filter = (filters) => {
        const excluded = []
        props.categoryData.forEach(product => {
            if(excluded.indexOf(product.data.name === -1)) {
                Object.keys(filters).filter(key => {
                    const fieldToCheck = Array.isArray(product.data[key]) ? product.data[key] : [product.data[key]]
                    return filters[key].every(value => {
                        return fieldToCheck.indexOf(value) === -1
                    })
                }).length > 0 && excluded.push(product.data.reference)
            }
        })
        setFilters(filters)
        handleExcluded(excluded, props.categoryData)
    }

    const handleExcluded = (excluded, initialSet) => {
        initialSet.forEach(product => {
            document.getElementById(product.data.reference).style.display = excluded.indexOf(product.data.reference) > -1 ? "none" : "inline-block"
        })
    }

    const reinitTags = () => {
        const checkboxList = document.getElementsByClassName('checkbox')
        for (let checkbox of checkboxList) {
            if(checkbox.checked && !checkbox.disabled) {checkbox.checked = false}
        }
        const productList = document.getElementsByClassName('product')
        for (let product of productList) {
            product.style.display = "inline-block"
        }
        setFilters({})
    }

    Object.entries(TagsData).map(([key, value]) => {
        tagList.push(
            <TagZone
                tags={props.tags[key]}
                name={key}
                key={key}
                title={value.value}
                data={ReduceTag(history.location.state.categoryData, key)}
                handleFilters={handleFilters}
            ></TagZone>
        )
    })

    return (
        <>  
            <div
                id="tagsContainer"
            >
                {tagList}<br></br>
                <Button
                    classN={"button buttonGroup"}
                    lineStyle={{width: "80%"}} 
                    click={reinitTags}
                >Tout Décocher</Button>
            </div>
            {console.log("Tags")}
        </>
    )
};

export default Tags;