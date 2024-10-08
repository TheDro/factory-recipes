import _ from 'lodash'

let rawRecipes = {
	"TempRecipe_NuclearWaste_C": [
		{
			"className": "TempRecipe_NuclearWaste_C",
			"name": "Uranium Fuel Rod (burning)",
			"unlockedBy": "[[Tier 8]] - Nuclear Power",
			"duration": 300,
			"ingredients": [
				{
					"item": "Desc_NuclearFuelRod_C",
					"amount": 1
				},
				{
					"item": "Desc_Water_C",
					"amount": 1200
				}
			],
			"products": [
				{
					"item": "Desc_NuclearWaste_C",
					"amount": 50
				}
			],
			"producedIn": [
				"Desc_GeneratorNuclear_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"TempRecipe_PlutoniumWaste_C": [
		{
			"className": "TempRecipe_PlutoniumWaste_C",
			"name": "Plutonium Fuel Rod (burning)",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 600,
			"ingredients": [
				{
					"item": "Desc_PlutoniumFuelRod_C",
					"amount": 1
				},
				{
					"item": "Desc_Water_C",
					"amount": 2400
				}
			],
			"products": [
				{
					"item": "Desc_PlutoniumWaste_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_GeneratorNuclear_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AlienPowerFuel_C": [
		{
			"className": "Recipe_AlienPowerFuel_C",
			"name": "Alien Power Matrix",
			"unlockedBy": "[[Alien Technology Research|MAM Alien Technology Research]] - Alien Power Matrix",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_SAMFluctuator_C",
					"amount": 5
				},
				{
					"item": "Desc_CrystalShard_C",
					"amount": 3
				},
				{
					"item": "Desc_QuantumOscillator_C",
					"amount": 3
				},
				{
					"item": "Desc_QuantumEnergy_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_AlienPowerFuel_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 24
				}
			],
			"producedIn": [
				"Desc_QuantumEncoder_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": 0,
			"maxPower": 2000,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x1_C": [
		{
			"className": "Recipe_Wall_Concrete_8x1_C",
			"name": "Basic Wall (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_C",
			"name": "Basic Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_ConveyorHole_01_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_ConveyorHole_01_C",
			"name": "Conveyor Wall x 1",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_ConveyorHole_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_ConveyorHole_02_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_ConveyorHole_02_C",
			"name": "Conveyor Wall x 2",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_ConveyorHole_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_ConveyorHole_03_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_ConveyorHole_03_C",
			"name": "Conveyor Wall x 3",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_ConveyorHole_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_Corner_01_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_Corner_01_C",
			"name": "Tilted Corner Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_Corner_2_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_Corner_2_C",
			"name": "Tilted Concave Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_Corner_2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_Window_01_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_Window_01_C",
			"name": "Single Window",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_Window_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_Window_02_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_Window_02_C",
			"name": "Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_Window_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_Window_03_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_Window_03_C",
			"name": "Panel Window",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_Window_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x4_Window_04_C": [
		{
			"className": "Recipe_Wall_Concrete_8x4_Window_04_C",
			"name": "Reinforced Window",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_Window_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x8_Corner_01_C": [
		{
			"className": "Recipe_Wall_Concrete_8x8_Corner_01_C",
			"name": "Tilted Corner Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x8_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_8x8_Corner_2_C": [
		{
			"className": "Recipe_Wall_Concrete_8x8_Corner_2_C",
			"name": "Tilted Concave Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x8_Corner_2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_Angular_8x4_C": [
		{
			"className": "Recipe_Wall_Concrete_Angular_8x4_C",
			"name": "Tilted Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_Angular_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_Angular_8x8_C": [
		{
			"className": "Recipe_Wall_Concrete_Angular_8x8_C",
			"name": "Tilted Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_Angular_8x8_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_CDoor_8x4_C": [
		{
			"className": "Recipe_Wall_Concrete_CDoor_8x4_C",
			"name": "Center Door Wall",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_CDoor_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_FlipTris_8x1_C": [
		{
			"className": "Recipe_Wall_Concrete_FlipTris_8x1_C",
			"name": "Wall 1a",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x1_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_FlipTris_8x2_C": [
		{
			"className": "Recipe_Wall_Concrete_FlipTris_8x2_C",
			"name": "Inverted Ramp Wall (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x2_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_FlipTris_8x4_C": [
		{
			"className": "Recipe_Wall_Concrete_FlipTris_8x4_C",
			"name": "Inverted Ramp Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_FlipTris_8x8_C": [
		{
			"className": "Recipe_Wall_Concrete_FlipTris_8x8_C",
			"name": "Inverted Ramp Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x8_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_Gate_8x4_C": [
		{
			"className": "Recipe_Wall_Concrete_Gate_8x4_C",
			"name": "Gate Hole Wall",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_Gate_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_SDoor_8x4_C": [
		{
			"className": "Recipe_Wall_Concrete_SDoor_8x4_C",
			"name": "Side Door Wall",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_SDoor_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_Tris_8x1_C": [
		{
			"className": "Recipe_Wall_Concrete_Tris_8x1_C",
			"name": "Ramp Wall (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x1_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_Tris_8x2_C": [
		{
			"className": "Recipe_Wall_Concrete_Tris_8x2_C",
			"name": "Ramp Wall (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x2_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_Tris_8x4_C": [
		{
			"className": "Recipe_Wall_Concrete_Tris_8x4_C",
			"name": "Ramp Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x4_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Concrete_Tris_8x8_C": [
		{
			"className": "Recipe_Wall_Concrete_Tris_8x8_C",
			"name": "Ramp Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Concrete_8x8_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_8x4_01_C": [
		{
			"className": "Recipe_Wall_8x4_01_C",
			"name": "Basic Wall (4 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Conveyor_8x4_01_C": [
		{
			"className": "Recipe_Wall_Conveyor_8x4_01_C",
			"name": "Conveyor Wall x 3",
			"unlockedBy": "[[AWESOME Shop]] - Conveyor Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Conveyor_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Conveyor_8x4_02_C": [
		{
			"className": "Recipe_Wall_Conveyor_8x4_02_C",
			"name": "Conveyor Wall x 2",
			"unlockedBy": "[[AWESOME Shop]] - Conveyor Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Conveyor_8x4_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Conveyor_8x4_03_C": [
		{
			"className": "Recipe_Wall_Conveyor_8x4_03_C",
			"name": "Conveyor Wall x 1",
			"unlockedBy": "[[AWESOME Shop]] - Conveyor Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Conveyor_8x4_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Door_8x4_01_C": [
		{
			"className": "Recipe_Wall_Door_8x4_01_C",
			"name": "Center Door Wall",
			"unlockedBy": "[[AWESOME Shop]] - Door Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Door_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Door_8x4_03_C": [
		{
			"className": "Recipe_Wall_Door_8x4_03_C",
			"name": "Side Door Wall",
			"unlockedBy": "[[AWESOME Shop]] - Door Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Door_8x4_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Gate_8x4_01_C": [
		{
			"className": "Recipe_Wall_Gate_8x4_01_C",
			"name": "Gate Hole Wall",
			"unlockedBy": "[[AWESOME Shop]] - Gates",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Gate_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_8x1_C": [
		{
			"className": "Recipe_Wall_Orange_8x1_C",
			"name": "Basic Wall (1 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_8x4_Corner_01_C": [
		{
			"className": "Recipe_Wall_Orange_8x4_Corner_01_C",
			"name": "Tilted Corner Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tilted Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x4_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_8x4_Corner_02_C": [
		{
			"className": "Recipe_Wall_Orange_8x4_Corner_02_C",
			"name": "Tilted Concave Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tilted Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x4_Corner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_8x8_Corner_01_C": [
		{
			"className": "Recipe_Wall_Orange_8x8_Corner_01_C",
			"name": "Tilted Corner Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tilted Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x8_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_8x8_Corner_02_C": [
		{
			"className": "Recipe_Wall_Orange_8x8_Corner_02_C",
			"name": "Tilted Concave Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tilted Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x8_Corner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_Angular_8x4_C": [
		{
			"className": "Recipe_Wall_Orange_Angular_8x4_C",
			"name": "Tilted Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tilted Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_Angular_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_Angular_8x8_C": [
		{
			"className": "Recipe_Wall_Orange_Angular_8x8_C",
			"name": "Tilted Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tilted Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_Angular_8x8_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_FlipTris_8x1_C": [
		{
			"className": "Recipe_Wall_Orange_FlipTris_8x1_C",
			"name": "Inverted Ramp Wall (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x1_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_FlipTris_8x2_C": [
		{
			"className": "Recipe_Wall_Orange_FlipTris_8x2_C",
			"name": "Inverted Ramp Wall (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x2_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_FlipTris_8x4_C": [
		{
			"className": "Recipe_Wall_Orange_FlipTris_8x4_C",
			"name": "Inverted Ramp Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x4_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_FlipTris_8x8_C": [
		{
			"className": "Recipe_Wall_Orange_FlipTris_8x8_C",
			"name": "Inverted Ramp Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x8_FlipTris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_Tris_8x1_C": [
		{
			"className": "Recipe_Wall_Orange_Tris_8x1_C",
			"name": "Ramp Wall (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x1_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_Tris_8x2_C": [
		{
			"className": "Recipe_Wall_Orange_Tris_8x2_C",
			"name": "Ramp Wall (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x2_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_Tris_8x4_C": [
		{
			"className": "Recipe_Wall_Orange_Tris_8x4_C",
			"name": "Ramp Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x4_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Orange_Tris_8x8_C": [
		{
			"className": "Recipe_Wall_Orange_Tris_8x8_C",
			"name": "Ramp Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Ramp Wall Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Orange_8x8_Tris_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_8x4_01_C": [
		{
			"className": "Recipe_Wall_Window_8x4_01_C",
			"name": "Single Window",
			"unlockedBy": "[[AWESOME Shop]] - Windowed Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_8x4_02_C": [
		{
			"className": "Recipe_Wall_Window_8x4_02_C",
			"name": "Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Windowed Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_8x4_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_8x4_03_C": [
		{
			"className": "Recipe_Wall_Window_8x4_03_C",
			"name": "Panel Window",
			"unlockedBy": "[[AWESOME Shop]] - Windowed Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_8x4_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_8x4_04_C": [
		{
			"className": "Recipe_Wall_Window_8x4_04_C",
			"name": "Reinforced Window",
			"unlockedBy": "[[AWESOME Shop]] - Windowed Walls",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_8x4_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_8x4_Gate_01_C": [
		{
			"className": "Recipe_SteelWall_8x4_Gate_01_C",
			"name": "Gate Hole Wall",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_8x4_Gate_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_8x4_Window_01_C": [
		{
			"className": "Recipe_SteelWall_8x4_Window_01_C",
			"name": "Single Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_8x4_Window_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_8x4_Window_02_C": [
		{
			"className": "Recipe_SteelWall_8x4_Window_02_C",
			"name": "Reinforced Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_8x4_Window_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_8x4_Window_03_C": [
		{
			"className": "Recipe_SteelWall_8x4_Window_03_C",
			"name": "Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_8x4_Window_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_8x4_Window_04_C": [
		{
			"className": "Recipe_SteelWall_8x4_Window_04_C",
			"name": "Panel Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_8x4_Window_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Steel_8x4_Corner_01_C": [
		{
			"className": "Recipe_Wall_Steel_8x4_Corner_01_C",
			"name": "Tilted Corner Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Steel_8x4_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Steel_8x4_Corner_2_C": [
		{
			"className": "Recipe_Wall_Steel_8x4_Corner_2_C",
			"name": "Tilted Concave Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Steel_8x4_Corner_2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Steel_8x8_Corner_01_C": [
		{
			"className": "Recipe_Wall_Steel_8x8_Corner_01_C",
			"name": "Tilted Corner Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Steel_8x8_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Steel_8x8_Corner_2_C": [
		{
			"className": "Recipe_Wall_Steel_8x8_Corner_2_C",
			"name": "Tilted Concave Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Steel_8x8_Corner_2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_8x1_C": [
		{
			"className": "Recipe_SteelWall_8x1_C",
			"name": "Basic Wall (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_FlipTris_8x1_C": [
		{
			"className": "Recipe_SteelWall_FlipTris_8x1_C",
			"name": "Inverted Ramp Wall (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_FlipTris_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_FlipTris_8x2_C": [
		{
			"className": "Recipe_SteelWall_FlipTris_8x2_C",
			"name": "Inverted Ramp Wall (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_FlipTris_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_FlipTris_8x4_C": [
		{
			"className": "Recipe_SteelWall_FlipTris_8x4_C",
			"name": "Inverted Ramp Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_FlipTris_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_FlipTris_8x8_C": [
		{
			"className": "Recipe_SteelWall_FlipTris_8x8_C",
			"name": "Inverted Ramp Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_FlipTris_8x8_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_Tris_8x1_C": [
		{
			"className": "Recipe_SteelWall_Tris_8x1_C",
			"name": "Ramp Wall (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_Tris_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_Tris_8x2_C": [
		{
			"className": "Recipe_SteelWall_Tris_8x2_C",
			"name": "Ramp Wall (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_Tris_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_Tris_8x4_C": [
		{
			"className": "Recipe_SteelWall_Tris_8x4_C",
			"name": "Ramp Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_Tris_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelWall_Tris_8x8_C": [
		{
			"className": "Recipe_SteelWall_Tris_8x8_C",
			"name": "Ramp Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelWall_Tris_8x8_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_8x4_02_C": [
		{
			"className": "Recipe_Wall_8x4_02_C",
			"name": "Basic Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_8x4_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Conveyor_8x4_01_Steel_C": [
		{
			"className": "Recipe_Wall_Conveyor_8x4_01_Steel_C",
			"name": "Conveyor Wall x 3",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Conveyor_8x4_01_Steel_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Conveyor_8x4_02_Steel_C": [
		{
			"className": "Recipe_Wall_Conveyor_8x4_02_Steel_C",
			"name": "Conveyor Wall x 2",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Conveyor_8x4_02_Steel_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Conveyor_8x4_03_Steel_C": [
		{
			"className": "Recipe_Wall_Conveyor_8x4_03_Steel_C",
			"name": "Conveyor Wall x 1",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Conveyor_8x4_03_Steel_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Door_8x4_01_Steel_C": [
		{
			"className": "Recipe_Wall_Door_8x4_01_Steel_C",
			"name": "Center Door Wall",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Door_8x4_01_Steel_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Door_8x4_03_Steel_C": [
		{
			"className": "Recipe_Wall_Door_8x4_03_Steel_C",
			"name": "Side Door Wall",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Door_8x4_03_Steel_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_WallSet_Steel_Angular_8x4_C": [
		{
			"className": "Recipe_WallSet_Steel_Angular_8x4_C",
			"name": "Tilted Wall (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_WallSet_Steel_Angular_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_WallSet_Steel_Angular_8x8_C": [
		{
			"className": "Recipe_WallSet_Steel_Angular_8x8_C",
			"name": "Tilted Wall (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_WallSet_Steel_Angular_8x8_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorCeilingAttachment_C": [
		{
			"className": "Recipe_ConveyorCeilingAttachment_C",
			"name": "Conveyor Ceiling Mount",
			"unlockedBy": "[[AWESOME Shop]] - Conveyor Ceiling Mount",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorCeilingAttachment_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorPole_C": [
		{
			"className": "Recipe_ConveyorPole_C",
			"name": "Conveyor Pole",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 4",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 1
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				},
				{
					"item": "Desc_Cement_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorPole_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorPoleWall_C": [
		{
			"className": "Recipe_ConveyorPoleWall_C",
			"name": "Conveyor Wall Mount",
			"unlockedBy": "[[AWESOME Shop]] - Conveyor Wall Mount",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorPoleWall_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorBeltMk1_C": [
		{
			"className": "Recipe_ConveyorBeltMk1_C",
			"name": "Conveyor Belt Mk.1",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 4",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorBeltMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerLine_C": [
		{
			"className": "Recipe_PowerLine_C",
			"name": "Power Line",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cable_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PowerLine_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleMk1_C": [
		{
			"className": "Recipe_PowerPoleMk1_C",
			"name": "Power Pole Mk.1",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Wire_C",
					"amount": 3
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 1
				},
				{
					"item": "Desc_Cement_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleWall_C": [
		{
			"className": "Recipe_PowerPoleWall_C",
			"name": "Wall Outlet Mk.1",
			"unlockedBy": "[[AWESOME Shop]] - Wall Power Outlets Mk.1",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Wire_C",
					"amount": 4
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleWall_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TradingPost_C": [
		{
			"className": "Recipe_TradingPost_C",
			"name": "The HUB",
			"unlockedBy": "Onboarding",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_TradingPost_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_WorkBench_C": [
		{
			"className": "Recipe_WorkBench_C",
			"name": "Crafting Bench",
			"unlockedBy": "Onboarding",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 3
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_WorkBench_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IronPlate_C": [
		{
			"className": "Recipe_IronPlate_C",
			"name": "Iron Plate",
			"unlockedBy": "Onboarding",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IronRod_C": [
		{
			"className": "Recipe_IronRod_C",
			"name": "Iron Rod",
			"unlockedBy": "Onboarding",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronRod_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_XenoZapper_C": [
		{
			"className": "Recipe_XenoZapper_C",
			"name": "Xeno-Zapper",
			"unlockedBy": "Onboarding",
			"duration": 40,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 10
				},
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 2
				},
				{
					"item": "Desc_Cable_C",
					"amount": 15
				},
				{
					"item": "Desc_Wire_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorShockShank_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IngotIron_C": [
		{
			"className": "Recipe_IngotIron_C",
			"name": "Iron Ingot",
			"unlockedBy": "Onboarding",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_SmelterMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 3,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_RocketFuel_Nitro_C": [
		{
			"className": "Recipe_Alternate_RocketFuel_Nitro_C",
			"name": "Nitro Rocket Fuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Rocket Fuel",
			"duration": 2.4,
			"ingredients": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 4
				},
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 3
				},
				{
					"item": "Desc_Sulfur_C",
					"amount": 4
				},
				{
					"item": "Desc_Coal_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_RocketFuel_C",
					"amount": 6
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GeneratorCoal_C": [
		{
			"className": "Recipe_GeneratorCoal_C",
			"name": "Coal-Powered Generator",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 20
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 10
				},
				{
					"item": "Desc_Cable_C",
					"amount": 30
				}
			],
			"products": [
				{
					"item": "Desc_GeneratorCoal_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeSupport_C": [
		{
			"className": "Recipe_PipeSupport_C",
			"name": "Pipeline Support",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PipelineSupport_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeSupportWall_C": [
		{
			"className": "Recipe_PipeSupportWall_C",
			"name": "Pipeline Wall Support",
			"unlockedBy": "[[AWESOME Shop]] - Pipeline Wall Attachments",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PipelineSupportWall_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pipeline_C": [
		{
			"className": "Recipe_Pipeline_C",
			"name": "Pipeline Mk.1",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Pipeline_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipelineJunction_Cross_C": [
		{
			"className": "Recipe_PipelineJunction_Cross_C",
			"name": "Pipeline Junction",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_PipelineJunction_Cross_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipelinePump_C": [
		{
			"className": "Recipe_PipelinePump_C",
			"name": "Pipeline Pump Mk.1",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 2
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PipelinePump_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeStorageTank_C": [
		{
			"className": "Recipe_PipeStorageTank_C",
			"name": "Fluid Buffer",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_PipeStorageTank_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_WaterPump_C": [
		{
			"className": "Recipe_WaterPump_C",
			"name": "Water Extractor",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 20
				},
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_WaterPump_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ResourceSink_C": [
		{
			"className": "Recipe_ResourceSink_C",
			"name": "AWESOME Sink",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 15
				},
				{
					"item": "Desc_Cable_C",
					"amount": 30
				},
				{
					"item": "Desc_Cement_C",
					"amount": 45
				}
			],
			"products": [
				{
					"item": "Desc_ResourceSink_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ResourceSinkShop_C": [
		{
			"className": "Recipe_ResourceSinkShop_C",
			"name": "AWESOME Shop",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronScrew_C",
					"amount": 200
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 10
				},
				{
					"item": "Desc_Cable_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_ResourceSinkShop_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RocketFuel_C": [
		{
			"className": "Recipe_RocketFuel_C",
			"name": "Rocket Fuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Rocket Fuel",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_LiquidTurboFuel_C",
					"amount": 6
				},
				{
					"item": "Desc_NitricAcid_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_RocketFuel_C",
					"amount": 10
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedRocketFuel_C": [
		{
			"className": "Recipe_PackagedRocketFuel_C",
			"name": "Packaged Rocket Fuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Rocket Fuel",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_RocketFuel_C",
					"amount": 2
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PackagedRocketFuel_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageRocketFuel_C": [
		{
			"className": "Recipe_UnpackageRocketFuel_C",
			"name": "Unpackage Rocket Fuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Rocket Fuel",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_PackagedRocketFuel_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_RocketFuel_C",
					"amount": 2
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_IonizedFuel_Dark_C": [
		{
			"className": "Recipe_Alternate_IonizedFuel_Dark_C",
			"name": "Dark-Ion Fuel",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding OR\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Ionized Fuel",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_PackagedRocketFuel_C",
					"amount": 12
				},
				{
					"item": "Desc_DarkMatter_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_IonizedFuel_C",
					"amount": 10
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuantumEncoder_C": [
		{
			"className": "Recipe_QuantumEncoder_C",
			"name": "Quantum Encoder",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 20
				},
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 20
				},
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 50
				},
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 50
				},
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_QuantumEncoder_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DarkEnergy_C": [
		{
			"className": "Recipe_DarkEnergy_C",
			"name": "Dark Matter Residue",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuantumEnergy_C": [
		{
			"className": "Recipe_QuantumEnergy_C",
			"name": "Excited Photonic Matter",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 3,
			"ingredients": [],
			"products": [
				{
					"item": "Desc_QuantumEnergy_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DarkMatter_C": [
		{
			"className": "Recipe_DarkMatter_C",
			"name": "Dark Matter Crystal",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_Diamond_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DarkMatter_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 500,
			"maxPower": 1500,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SuperpositionOscillator_C": [
		{
			"className": "Recipe_SuperpositionOscillator_C",
			"name": "Superposition Oscillator",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_DarkMatter_C",
					"amount": 6
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 9
				},
				{
					"item": "Desc_QuantumEnergy_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_QuantumOscillator_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 25
				}
			],
			"producedIn": [
				"Desc_QuantumEncoder_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 0,
			"maxPower": 2000,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TemporalProcessor_C": [
		{
			"className": "Recipe_TemporalProcessor_C",
			"name": "Neural-Quantum Processor",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 5
				},
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 1
				},
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 15
				},
				{
					"item": "Desc_QuantumEnergy_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_TemporalProcessor_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 25
				}
			],
			"producedIn": [
				"Desc_QuantumEncoder_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 0,
			"maxPower": 2000,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_12_C": [
		{
			"className": "Recipe_SpaceElevatorPart_12_C",
			"name": "AI Expansion Server",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 15,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_6_C",
					"amount": 1
				},
				{
					"item": "Desc_TemporalProcessor_C",
					"amount": 1
				},
				{
					"item": "Desc_QuantumOscillator_C",
					"amount": 1
				},
				{
					"item": "Desc_QuantumEnergy_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_12_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 25
				}
			],
			"producedIn": [
				"Desc_QuantumEncoder_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 0,
			"maxPower": 2000,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IonizedFuel_C": [
		{
			"className": "Recipe_IonizedFuel_C",
			"name": "Ionized Fuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Ionized Fuel",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_RocketFuel_C",
					"amount": 16
				},
				{
					"item": "Desc_CrystalShard_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IonizedFuel_C",
					"amount": 16
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedIonizedFuel_C": [
		{
			"className": "Recipe_PackagedIonizedFuel_C",
			"name": "Packaged Ionized Fuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Ionized Fuel",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_IonizedFuel_C",
					"amount": 4
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PackagedIonizedFuel_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageIonizedFuel_C": [
		{
			"className": "Recipe_UnpackageIonizedFuel_C",
			"name": "Unpackage Ionized Fuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Ionized Fuel",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_PackagedIonizedFuel_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_IonizedFuel_C",
					"amount": 4
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Diamond_Turbo_C": [
		{
			"className": "Recipe_Alternate_Diamond_Turbo_C",
			"name": "Turbo Diamonds",
			"unlockedBy": "[[Tier 9]] - Matter Conversion OR\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Turbofuel",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_Coal_C",
					"amount": 30
				},
				{
					"item": "Desc_TurboFuel_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Diamond_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 250,
			"maxPower": 750,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SAMFluctuator_C": [
		{
			"className": "Recipe_SAMFluctuator_C",
			"name": "SAM Fluctuator",
			"unlockedBy": "[[Alien Technology Research|MAM Alien Technology Research]] - SAM Fluctuator OR\u003Cbr\u003E[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 6
				},
				{
					"item": "Desc_Wire_C",
					"amount": 5
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_SAMFluctuator_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Converter_C": [
		{
			"className": "Recipe_Converter_C",
			"name": "Converter",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 10
				},
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 25
				},
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 50
				},
				{
					"item": "Desc_SAMFluctuator_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_Converter_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FicsiteMesh_C": [
		{
			"className": "Recipe_FicsiteMesh_C",
			"name": "Ficsite Trigon",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_FicsiteIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FicsiteIngot_Iron_C": [
		{
			"className": "Recipe_FicsiteIngot_Iron_C",
			"name": "Ficsite Ingot (Iron)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 4
				},
				{
					"item": "Desc_IronIngot_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_FicsiteIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TimeCrystal_C": [
		{
			"className": "Recipe_TimeCrystal_C",
			"name": "Time Crystal",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 10,
			"ingredients": [
				{
					"item": "Desc_Diamond_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Diamond_C": [
		{
			"className": "Recipe_Diamond_C",
			"name": "Diamonds",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_Coal_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_Diamond_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 250,
			"maxPower": 750,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IngotSAM_C": [
		{
			"className": "Recipe_IngotSAM_C",
			"name": "Reanimated SAM",
			"unlockedBy": "[[Alien Technology Research|MAM Alien Technology Research]] - SAM Reanimation OR\u003Cbr\u003E[[Tier 9]] - Matter Conversion",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_SAM_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_10_C": [
		{
			"className": "Recipe_SpaceElevatorPart_10_C",
			"name": "Biochemical Sculptor",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_7_C",
					"amount": 1
				},
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 80
				},
				{
					"item": "Desc_Water_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_10_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 500,
			"maxPower": 1500,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FicsiteIngot_AL_C": [
		{
			"className": "Recipe_FicsiteIngot_AL_C",
			"name": "Ficsite Ingot (Aluminum)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 2
				},
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_FicsiteIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FicsiteIngot_CAT_C": [
		{
			"className": "Recipe_FicsiteIngot_CAT_C",
			"name": "Ficsite Ingot (Caterium)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 3
				},
				{
					"item": "Desc_GoldIngot_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_FicsiteIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Bauxite_Caterium_C": [
		{
			"className": "Recipe_Bauxite_Caterium_C",
			"name": "Bauxite (Caterium)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreGold_C",
					"amount": 15
				}
			],
			"products": [
				{
					"item": "Desc_OreBauxite_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Bauxite_Copper_C": [
		{
			"className": "Recipe_Bauxite_Copper_C",
			"name": "Bauxite (Copper)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreCopper_C",
					"amount": 18
				}
			],
			"products": [
				{
					"item": "Desc_OreBauxite_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Caterium_Copper_C": [
		{
			"className": "Recipe_Caterium_Copper_C",
			"name": "Caterium Ore (Copper)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreCopper_C",
					"amount": 15
				}
			],
			"products": [
				{
					"item": "Desc_OreGold_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Caterium_Quartz_C": [
		{
			"className": "Recipe_Caterium_Quartz_C",
			"name": "Caterium Ore (Quartz)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_RawQuartz_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_OreGold_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Coal_Iron_C": [
		{
			"className": "Recipe_Coal_Iron_C",
			"name": "Coal (Iron)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreIron_C",
					"amount": 18
				}
			],
			"products": [
				{
					"item": "Desc_Coal_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Coal_Limestone_C": [
		{
			"className": "Recipe_Coal_Limestone_C",
			"name": "Coal (Limestone)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_Stone_C",
					"amount": 36
				}
			],
			"products": [
				{
					"item": "Desc_Coal_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Copper_Quartz_C": [
		{
			"className": "Recipe_Copper_Quartz_C",
			"name": "Copper Ore (Quartz)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_RawQuartz_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_OreCopper_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Copper_Sulfur_C": [
		{
			"className": "Recipe_Copper_Sulfur_C",
			"name": "Copper Ore (Sulfur)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_Sulfur_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_OreCopper_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Iron_Limestone_C": [
		{
			"className": "Recipe_Iron_Limestone_C",
			"name": "Iron Ore (Limestone)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_Stone_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_OreIron_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Limestone_Sulfur_C": [
		{
			"className": "Recipe_Limestone_Sulfur_C",
			"name": "Limestone (Sulfur)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_Sulfur_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Stone_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Nitrogen_Bauxite_C": [
		{
			"className": "Recipe_Nitrogen_Bauxite_C",
			"name": "Nitrogen Gas (Bauxite)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreBauxite_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Nitrogen_Caterium_C": [
		{
			"className": "Recipe_Nitrogen_Caterium_C",
			"name": "Nitrogen Gas (Caterium)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreGold_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Quartz_Bauxite_C": [
		{
			"className": "Recipe_Quartz_Bauxite_C",
			"name": "Raw Quartz (Bauxite)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreBauxite_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Quartz_Coal_C": [
		{
			"className": "Recipe_Quartz_Coal_C",
			"name": "Raw Quartz (Coal)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_Coal_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Sulfur_Coal_C": [
		{
			"className": "Recipe_Sulfur_Coal_C",
			"name": "Sulfur (Coal)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_Coal_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_Sulfur_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Sulfur_Iron_C": [
		{
			"className": "Recipe_Sulfur_Iron_C",
			"name": "Sulfur (Iron)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreIron_C",
					"amount": 30
				}
			],
			"products": [
				{
					"item": "Desc_Sulfur_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Uranium_Bauxite_C": [
		{
			"className": "Recipe_Uranium_Bauxite_C",
			"name": "Uranium Ore (Bauxite)",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SAMIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_OreBauxite_C",
					"amount": 48
				}
			],
			"products": [
				{
					"item": "Desc_OreUranium_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Turbofuel_C": [
		{
			"className": "Recipe_Alternate_Turbofuel_C",
			"name": "Turbofuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Turbofuel",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 6
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_LiquidTurboFuel_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedTurboFuel_C": [
		{
			"className": "Recipe_PackagedTurboFuel_C",
			"name": "Packaged Turbofuel",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Turbofuel OR\u003Cbr\u003E[[Tier 7]] - Control System Development OR\u003Cbr\u003E[[Tier 5]] - Oil Processing AND\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_LiquidTurboFuel_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_TurboFuel_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageTurboFuel_C": [
		{
			"className": "Recipe_UnpackageTurboFuel_C",
			"name": "Unpackage Turbofuel",
			"unlockedBy": "[[Tier 7]] - Control System Development OR\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Turbofuel OR\u003Cbr\u003E[[Tier 5]] - Oil Processing AND\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_TurboFuel_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_LiquidTurboFuel_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Coal_1_C": [
		{
			"className": "Recipe_Alternate_Coal_1_C",
			"name": "Charcoal",
			"unlockedBy": "[[Tier 3]] - Coal Power OR\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Wood_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Coal_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Coal_2_C": [
		{
			"className": "Recipe_Alternate_Coal_2_C",
			"name": "Biocoal",
			"unlockedBy": "[[Tier 3]] - Coal Power OR\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Coal_C",
					"amount": 6
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_EnrichedCoal_C": [
		{
			"className": "Recipe_Alternate_EnrichedCoal_C",
			"name": "Compacted Coal",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Coal_C",
					"amount": 5
				},
				{
					"item": "Desc_Sulfur_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CircuitBoard_C": [
		{
			"className": "Recipe_CircuitBoard_C",
			"name": "Circuit Board",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 2
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_OilPump_C": [
		{
			"className": "Recipe_OilPump_C",
			"name": "Oil Extractor",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 15
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 20
				},
				{
					"item": "Desc_Cable_C",
					"amount": 60
				}
			],
			"products": [
				{
					"item": "Desc_OilPump_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_OilRefinery_C": [
		{
			"className": "Recipe_OilRefinery_C",
			"name": "Refinery",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 30
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_OilRefinery_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Valve_C": [
		{
			"className": "Recipe_Valve_C",
			"name": "Valve",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Rubber_C",
					"amount": 4
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_Valve_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_LiquidFuel_C": [
		{
			"className": "Recipe_LiquidFuel_C",
			"name": "Fuel",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 4
				},
				{
					"item": "Desc_PolymerResin_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PetroleumCoke_C": [
		{
			"className": "Recipe_PetroleumCoke_C",
			"name": "Petroleum Coke",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Plastic_C": [
		{
			"className": "Recipe_Plastic_C",
			"name": "Plastic",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Plastic_C",
					"amount": 2
				},
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Rubber_C": [
		{
			"className": "Recipe_Rubber_C",
			"name": "Rubber",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Rubber_C",
					"amount": 2
				},
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ResidualFuel_C": [
		{
			"className": "Recipe_ResidualFuel_C",
			"name": "Residual Fuel",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ResidualPlastic_C": [
		{
			"className": "Recipe_ResidualPlastic_C",
			"name": "Residual Plastic",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_PolymerResin_C",
					"amount": 6
				},
				{
					"item": "Desc_Water_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Plastic_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ResidualRubber_C": [
		{
			"className": "Recipe_ResidualRubber_C",
			"name": "Residual Rubber",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_PolymerResin_C",
					"amount": 4
				},
				{
					"item": "Desc_Water_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_Rubber_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Diamond_Pink_C": [
		{
			"className": "Recipe_Alternate_Diamond_Pink_C",
			"name": "Pink Diamonds",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Coal_C",
					"amount": 8
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Diamond_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Converter_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 100,
			"maxPower": 400,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Diamond_Petroleum_C": [
		{
			"className": "Recipe_Alternate_Diamond_Petroleum_C",
			"name": "Petroleum Diamonds",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_Diamond_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 250,
			"maxPower": 750,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Diamond_OilBased_C": [
		{
			"className": "Recipe_Alternate_Diamond_OilBased_C",
			"name": "Oil-Based Diamonds",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_Diamond_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 250,
			"maxPower": 750,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Diamond_Cloudy_C": [
		{
			"className": "Recipe_Alternate_Diamond_Cloudy_C",
			"name": "Cloudy Diamonds",
			"unlockedBy": "[[Tier 9]] - Matter Conversion",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_Coal_C",
					"amount": 12
				},
				{
					"item": "Desc_Stone_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_Diamond_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 250,
			"maxPower": 750,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_DarkMatter_Trap_C": [
		{
			"className": "Recipe_Alternate_DarkMatter_Trap_C",
			"name": "Dark Matter Trap",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DarkMatter_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 500,
			"maxPower": 1500,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_DarkMatter_Crystallization_C": [
		{
			"className": "Recipe_Alternate_DarkMatter_Crystallization_C",
			"name": "Dark Matter Crystallization",
			"unlockedBy": "[[Tier 9]] - Quantum Encoding",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_DarkMatter_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": 500,
			"maxPower": 1500,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_WetConcrete_C": [
		{
			"className": "Recipe_Alternate_WetConcrete_C",
			"name": "Wet Concrete",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_Stone_C",
					"amount": 6
				},
				{
					"item": "Desc_Water_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Cement_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_TurboHeavyFuel_C": [
		{
			"className": "Recipe_Alternate_TurboHeavyFuel_C",
			"name": "Turbo Heavy Fuel",
			"unlockedBy": "[[Tier 5]] - Oil Processing OR\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 5
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_LiquidTurboFuel_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteelRod_C": [
		{
			"className": "Recipe_Alternate_SteelRod_C",
			"name": "Steel Rod",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 5,
			"ingredients": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronRod_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SmelterMk1_C": [
		{
			"className": "Recipe_SmelterMk1_C",
			"name": "Foundry",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 10
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 10
				},
				{
					"item": "Desc_Cement_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_FoundryMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelBeam_C": [
		{
			"className": "Recipe_SteelBeam_C",
			"name": "Steel Beam",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SteelPipe_C": [
		{
			"className": "Recipe_SteelPipe_C",
			"name": "Steel Pipe",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IngotSteel_C": [
		{
			"className": "Recipe_IngotSteel_C",
			"name": "Steel Ingot",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 3
				},
				{
					"item": "Desc_Coal_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 3,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_2_C": [
		{
			"className": "Recipe_SpaceElevatorPart_2_C",
			"name": "Versatile Framework",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 1
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_2_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteelCanister_C": [
		{
			"className": "Recipe_Alternate_SteelCanister_C",
			"name": "Steel Canister",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_FluidCanister_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Packager_C": [
		{
			"className": "Recipe_Packager_C",
			"name": "Packager",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 20
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 10
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_Packager_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FluidCanister_C": [
		{
			"className": "Recipe_FluidCanister_C",
			"name": "Empty Canister",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Plastic_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_FluidCanister_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Fuel_C": [
		{
			"className": "Recipe_Fuel_C",
			"name": "Packaged Fuel",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Fuel_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_LiquidBiofuel_C": [
		{
			"className": "Recipe_LiquidBiofuel_C",
			"name": "Liquid Biofuel",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Biofuel_C",
					"amount": 6
				},
				{
					"item": "Desc_Water_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_LiquidBiofuel_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedBiofuel_C": [
		{
			"className": "Recipe_PackagedBiofuel_C",
			"name": "Packaged Liquid Biofuel",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_LiquidBiofuel_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PackagedBiofuel_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedCrudeOil_C": [
		{
			"className": "Recipe_PackagedCrudeOil_C",
			"name": "Packaged Oil",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PackagedOil_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedOilResidue_C": [
		{
			"className": "Recipe_PackagedOilResidue_C",
			"name": "Packaged Heavy Oil Residue",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PackagedOilResidue_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedWater_C": [
		{
			"className": "Recipe_PackagedWater_C",
			"name": "Packaged Water",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_Water_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PackagedWater_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageBioFuel_C": [
		{
			"className": "Recipe_UnpackageBioFuel_C",
			"name": "Unpackage Liquid Biofuel",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_PackagedBiofuel_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_LiquidBiofuel_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageFuel_C": [
		{
			"className": "Recipe_UnpackageFuel_C",
			"name": "Unpackage Fuel",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_Fuel_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageOil_C": [
		{
			"className": "Recipe_UnpackageOil_C",
			"name": "Unpackage Oil",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_PackagedOil_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageOilResidue_C": [
		{
			"className": "Recipe_UnpackageOilResidue_C",
			"name": "Unpackage Heavy Oil Residue",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_PackagedOilResidue_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageWater_C": [
		{
			"className": "Recipe_UnpackageWater_C",
			"name": "Unpackage Water",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_PackagedWater_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Water_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteamedCopperSheet_C": [
		{
			"className": "Recipe_Alternate_SteamedCopperSheet_C",
			"name": "Steamed Copper Sheet",
			"unlockedBy": "[[Tier 3]] - Coal Power",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 3
				},
				{
					"item": "Desc_Water_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_RubberConcrete_C": [
		{
			"className": "Recipe_Alternate_RubberConcrete_C",
			"name": "Rubber Concrete",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_Stone_C",
					"amount": 10
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Cement_C",
					"amount": 9
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_RecycledRubber_C": [
		{
			"className": "Recipe_Alternate_RecycledRubber_C",
			"name": "Recycled Rubber",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Plastic_C",
					"amount": 6
				},
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_Rubber_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PureQuartzCrystal_C": [
		{
			"className": "Recipe_Alternate_PureQuartzCrystal_C",
			"name": "Pure Quartz Crystal",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Quartz Crystals OR\u003Cbr\u003E[[Tier 5]] - Oil Processing",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 9
				},
				{
					"item": "Desc_Water_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 7
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuartzCrystal_C": [
		{
			"className": "Recipe_QuartzCrystal_C",
			"name": "Quartz Crystal",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Quartz Crystals OR\u003Cbr\u003E[[Tier 7]] - Bauxite Refinement",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PureIronIngot_C": [
		{
			"className": "Recipe_Alternate_PureIronIngot_C",
			"name": "Pure Iron Ingot",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 7
				},
				{
					"item": "Desc_Water_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 13
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PureCopperIngot_C": [
		{
			"className": "Recipe_Alternate_PureCopperIngot_C",
			"name": "Pure Copper Ingot",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_OreCopper_C",
					"amount": 6
				},
				{
					"item": "Desc_Water_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 15
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PureCateriumIngot_C": [
		{
			"className": "Recipe_Alternate_PureCateriumIngot_C",
			"name": "Pure Caterium Ingot",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Caterium OR\u003Cbr\u003E[[Tier 5]] - Oil Processing",
			"duration": 5,
			"ingredients": [
				{
					"item": "Desc_OreGold_C",
					"amount": 2
				},
				{
					"item": "Desc_Water_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PureAluminumIngot_C": [
		{
			"className": "Recipe_PureAluminumIngot_C",
			"name": "Pure Aluminum Ingot",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_AluminumScrap_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_SmelterMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AluminumCasing_C": [
		{
			"className": "Recipe_AluminumCasing_C",
			"name": "Aluminum Casing",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AluminumSheet_C": [
		{
			"className": "Recipe_AluminumSheet_C",
			"name": "Alclad Aluminum Sheet",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 3
				},
				{
					"item": "Desc_CopperIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AluminaSolution_C": [
		{
			"className": "Recipe_AluminaSolution_C",
			"name": "Alumina Solution",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_OreBauxite_C",
					"amount": 12
				},
				{
					"item": "Desc_Water_C",
					"amount": 18
				}
			],
			"products": [
				{
					"item": "Desc_AluminaSolution_C",
					"amount": 12
				},
				{
					"item": "Desc_Silica_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AluminumScrap_C": [
		{
			"className": "Recipe_AluminumScrap_C",
			"name": "Aluminum Scrap",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_AluminaSolution_C",
					"amount": 4
				},
				{
					"item": "Desc_Coal_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_AluminumScrap_C",
					"amount": 6
				},
				{
					"item": "Desc_Water_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedAlumina_C": [
		{
			"className": "Recipe_PackagedAlumina_C",
			"name": "Packaged Alumina Solution",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_AluminaSolution_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PackagedAlumina_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IngotAluminum_C": [
		{
			"className": "Recipe_IngotAluminum_C",
			"name": "Aluminum Ingot",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_AluminumScrap_C",
					"amount": 6
				},
				{
					"item": "Desc_Silica_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 3,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Silica_C": [
		{
			"className": "Recipe_Silica_C",
			"name": "Silica",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Silica OR\u003Cbr\u003E[[Tier 7]] - Bauxite Refinement",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Silica_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CrystalOscillator_C": [
		{
			"className": "Recipe_CrystalOscillator_C",
			"name": "Crystal Oscillator",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Crystal Oscillator OR\u003Cbr\u003E[[Tier 7]] - Bauxite Refinement",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 36
				},
				{
					"item": "Desc_Cable_C",
					"amount": 28
				},
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.3,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageAlumina_C": [
		{
			"className": "Recipe_UnpackageAlumina_C",
			"name": "Unpackage Alumina Solution",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_PackagedAlumina_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_AluminaSolution_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PolymerResin_C": [
		{
			"className": "Recipe_Alternate_PolymerResin_C",
			"name": "Polymer Resin",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_PolymerResin_C",
					"amount": 13
				},
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PlasticSmartPlating_C": [
		{
			"className": "Recipe_Alternate_PlasticSmartPlating_C",
			"name": "Plastic Smart Plating",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 1
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 1
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_1_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_HighSpeedWiring_C": [
		{
			"className": "Recipe_Alternate_HighSpeedWiring_C",
			"name": "Automated Speed Wiring",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - AI Limiter",
			"duration": 32,
			"ingredients": [
				{
					"item": "Desc_Stator_C",
					"amount": 2
				},
				{
					"item": "Desc_Wire_C",
					"amount": 40
				},
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_3_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_EncasedIndustrialBeam_C": [
		{
			"className": "Recipe_EncasedIndustrialBeam_C",
			"name": "Encased Industrial Beam",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production",
			"duration": 10,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 3
				},
				{
					"item": "Desc_Cement_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Motor_C": [
		{
			"className": "Recipe_Motor_C",
			"name": "Motor",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				},
				{
					"item": "Desc_Stator_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Motor_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stator_C": [
		{
			"className": "Recipe_Stator_C",
			"name": "Stator",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 3
				},
				{
					"item": "Desc_Wire_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_Stator_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_MinerMk2_C": [
		{
			"className": "Recipe_MinerMk2_C",
			"name": "Miner Mk.2",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "BP_ItemDescriptorPortableMiner_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 20
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_MinerMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_3_C": [
		{
			"className": "Recipe_SpaceElevatorPart_3_C",
			"name": "Automated Wiring",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_Stator_C",
					"amount": 1
				},
				{
					"item": "Desc_Cable_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_3_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AILimiter_C": [
		{
			"className": "Recipe_AILimiter_C",
			"name": "AI Limiter",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - AI Limiter OR\u003Cbr\u003E[[Tier 7]] - Control System Development",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 5
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_HeavyOilResidue_C": [
		{
			"className": "Recipe_Alternate_HeavyOilResidue_C",
			"name": "Heavy Oil Residue",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_LiquidOil_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 4
				},
				{
					"item": "Desc_PolymerResin_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_HeavyFlexibleFrame_C": [
		{
			"className": "Recipe_Alternate_HeavyFlexibleFrame_C",
			"name": "Heavy Flexible Frame",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 5
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 3
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 20
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 104
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ManufacturerMk1_C": [
		{
			"className": "Recipe_ManufacturerMk1_C",
			"name": "Manufacturer",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 20
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 50
				},
				{
					"item": "Desc_Cable_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_ManufacturerMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Computer_C": [
		{
			"className": "Recipe_Computer_C",
			"name": "Computer",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 4
				},
				{
					"item": "Desc_Cable_C",
					"amount": 8
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 16
				}
			],
			"products": [
				{
					"item": "Desc_Computer_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ModularFrameHeavy_C": [
		{
			"className": "Recipe_ModularFrameHeavy_C",
			"name": "Heavy Modular Frame",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing",
			"duration": 30,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 5
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 20
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 5
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 120
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.6,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_4_C": [
		{
			"className": "Recipe_SpaceElevatorPart_4_C",
			"name": "Modular Engine",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 2
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 15
				},
				{
					"item": "Desc_SpaceElevatorPart_1_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_4_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_5_C": [
		{
			"className": "Recipe_SpaceElevatorPart_5_C",
			"name": "Adaptive Control Unit",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_3_C",
					"amount": 5
				},
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 5
				},
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 1
				},
				{
					"item": "Desc_Computer_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_5_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_FusedWire_C": [
		{
			"className": "Recipe_Alternate_FusedWire_C",
			"name": "Fused Wire",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Caterium",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 4
				},
				{
					"item": "Desc_GoldIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Wire_C",
					"amount": 30
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_FlexibleFramework_C": [
		{
			"className": "Recipe_Alternate_FlexibleFramework_C",
			"name": "Flexible Framework",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 1
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 6
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_2_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ElectrodeCircuitBoard_C": [
		{
			"className": "Recipe_Alternate_ElectrodeCircuitBoard_C",
			"name": "Electrode Circuit Board",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Rubber_C",
					"amount": 4
				},
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ElectroAluminumScrap_C": [
		{
			"className": "Recipe_Alternate_ElectroAluminumScrap_C",
			"name": "Electrode Aluminum Scrap",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_AluminaSolution_C",
					"amount": 12
				},
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_AluminumScrap_C",
					"amount": 20
				},
				{
					"item": "Desc_Water_C",
					"amount": 7
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_DilutedPackagedFuel_C": [
		{
			"className": "Recipe_Alternate_DilutedPackagedFuel_C",
			"name": "Diluted Packaged Fuel",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 1
				},
				{
					"item": "Desc_PackagedWater_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Fuel_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CopperRotor_C": [
		{
			"className": "Recipe_Alternate_CopperRotor_C",
			"name": "Copper Rotor",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 6
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 52
				}
			],
			"products": [
				{
					"item": "Desc_Rotor_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ModularFrame_C": [
		{
			"className": "Recipe_ModularFrame_C",
			"name": "Modular Frame",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 3
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Rotor_C": [
		{
			"className": "Recipe_Rotor_C",
			"name": "Rotor",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 15,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 5
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_Rotor_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.8,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AssemblerMk1_C": [
		{
			"className": "Recipe_AssemblerMk1_C",
			"name": "Assembler",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 8
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 4
				},
				{
					"item": "Desc_Cable_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_AssemblerMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CopperSheet_C": [
		{
			"className": "Recipe_CopperSheet_C",
			"name": "Copper Sheet",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_1_C": [
		{
			"className": "Recipe_SpaceElevatorPart_1_C",
			"name": "Smart Plating",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 30,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 1
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_1_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CopperAlloyIngot_C": [
		{
			"className": "Recipe_Alternate_CopperAlloyIngot_C",
			"name": "Copper Alloy Ingot",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_OreCopper_C",
					"amount": 5
				},
				{
					"item": "Desc_OreIron_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CokeSteelIngot_C": [
		{
			"className": "Recipe_Alternate_CokeSteelIngot_C",
			"name": "Coke Steel Ingot",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 15
				},
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 15
				}
			],
			"products": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 20
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CoatedIronPlate_C": [
		{
			"className": "Recipe_Alternate_CoatedIronPlate_C",
			"name": "Coated Iron Plate",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 5
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CoatedIronCanister_C": [
		{
			"className": "Recipe_Alternate_CoatedIronCanister_C",
			"name": "Coated Iron Canister",
			"unlockedBy": "[[Tier 5]] - Fluid Packaging",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_FluidCanister_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CoatedCable_C": [
		{
			"className": "Recipe_Alternate_CoatedCable_C",
			"name": "Coated Cable",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_Wire_C",
					"amount": 5
				},
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Cable_C",
					"amount": 9
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_BoltedFrame_C": [
		{
			"className": "Recipe_Alternate_BoltedFrame_C",
			"name": "Bolted Frame",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 3
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 56
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_AdheredIronPlate_C": [
		{
			"className": "Recipe_Alternate_AdheredIronPlate_C",
			"name": "Adhered Iron Plate",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 3
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_TurboPressureMotor_C": [
		{
			"className": "Recipe_Alternate_TurboPressureMotor_C",
			"name": "Turbo Pressure Motor",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 32,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 4
				},
				{
					"item": "Desc_PressureConversionCube_C",
					"amount": 1
				},
				{
					"item": "Desc_PackagedNitrogenGas_C",
					"amount": 24
				},
				{
					"item": "Desc_Stator_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PlutoniumCell_C": [
		{
			"className": "Recipe_PlutoniumCell_C",
			"name": "Encased Plutonium Cell",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_PlutoniumPellet_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_PlutoniumCell_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PressureConversionCube_C": [
		{
			"className": "Recipe_PressureConversionCube_C",
			"name": "Pressure Conversion Cube",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 1
				},
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PressureConversionCube_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NitricAcid_C": [
		{
			"className": "Recipe_NitricAcid_C",
			"name": "Nitric Acid",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 12
				},
				{
					"item": "Desc_Water_C",
					"amount": 3
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_NitricAcid_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NonFissileUranium_C": [
		{
			"className": "Recipe_NonFissileUranium_C",
			"name": "Non-Fissile Uranium",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_NuclearWaste_C",
					"amount": 15
				},
				{
					"item": "Desc_Silica_C",
					"amount": 10
				},
				{
					"item": "Desc_NitricAcid_C",
					"amount": 6
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_NonFissibleUranium_C",
					"amount": 20
				},
				{
					"item": "Desc_Water_C",
					"amount": 6
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_HadronCollider_C": [
		{
			"className": "Recipe_HadronCollider_C",
			"name": "Particle Accelerator",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 10
				},
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 25
				},
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 50
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 500
				}
			],
			"products": [
				{
					"item": "Desc_HadronCollider_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CopperDust_C": [
		{
			"className": "Recipe_CopperDust_C",
			"name": "Copper Powder",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 30
				}
			],
			"products": [
				{
					"item": "Desc_CopperDust_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Plutonium_C": [
		{
			"className": "Recipe_Plutonium_C",
			"name": "Plutonium Pellet",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_NonFissibleUranium_C",
					"amount": 100
				},
				{
					"item": "Desc_NuclearWaste_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_PlutoniumPellet_C",
					"amount": 30
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 250,
			"maxPower": 750,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PlutoniumFuelRod_C": [
		{
			"className": "Recipe_PlutoniumFuelRod_C",
			"name": "Plutonium Fuel Rod",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 240,
			"ingredients": [
				{
					"item": "Desc_PlutoniumCell_C",
					"amount": 30
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 18
				},
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 6
				},
				{
					"item": "Desc_AluminumPlateReinforced_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_PlutoniumFuelRod_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedNitricAcid_C": [
		{
			"className": "Recipe_PackagedNitricAcid_C",
			"name": "Packaged Nitric Acid",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_NitricAcid_C",
					"amount": 1
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PackagedNitricAcid_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_9_C": [
		{
			"className": "Recipe_SpaceElevatorPart_9_C",
			"name": "Nuclear Pasta",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_CopperDust_C",
					"amount": 200
				},
				{
					"item": "Desc_PressureConversionCube_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_9_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 500,
			"maxPower": 1500,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageNitricAcid_C": [
		{
			"className": "Recipe_UnpackageNitricAcid_C",
			"name": "Unpackage Nitric Acid",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_PackagedNitricAcid_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_NitricAcid_C",
					"amount": 1
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_TurboBlendFuel_C": [
		{
			"className": "Recipe_Alternate_TurboBlendFuel_C",
			"name": "Turbo Blend Fuel",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 2
				},
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 4
				},
				{
					"item": "Desc_Sulfur_C",
					"amount": 3
				},
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_LiquidTurboFuel_C",
					"amount": 6
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UraniumCell_C": [
		{
			"className": "Recipe_UraniumCell_C",
			"name": "Encased Uranium Cell",
			"unlockedBy": "[[Tier 8]] - Nuclear Power",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreUranium_C",
					"amount": 10
				},
				{
					"item": "Desc_Cement_C",
					"amount": 3
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_UraniumCell_C",
					"amount": 5
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CoolingSystem_C": [
		{
			"className": "Recipe_CoolingSystem_C",
			"name": "Cooling System",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 10,
			"ingredients": [
				{
					"item": "Desc_AluminumPlateReinforced_C",
					"amount": 2
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 2
				},
				{
					"item": "Desc_Water_C",
					"amount": 5
				},
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Blender_C": [
		{
			"className": "Recipe_Blender_C",
			"name": "Blender",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Computer_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 10
				},
				{
					"item": "Desc_Motor_C",
					"amount": 20
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_Blender_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Battery_C": [
		{
			"className": "Recipe_Battery_C",
			"name": "Battery",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 2.5
				},
				{
					"item": "Desc_AluminaSolution_C",
					"amount": 2
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Battery_C",
					"amount": 1
				},
				{
					"item": "Desc_Water_C",
					"amount": 1.5
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ComputerSuper_C": [
		{
			"className": "Recipe_ComputerSuper_C",
			"name": "Supercomputer",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 32,
			"ingredients": [
				{
					"item": "Desc_Computer_C",
					"amount": 4
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 2
				},
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 3
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 28
				}
			],
			"products": [
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RadioControlUnit_C": [
		{
			"className": "Recipe_RadioControlUnit_C",
			"name": "Radio Control Unit",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 48,
			"ingredients": [
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 32
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				},
				{
					"item": "Desc_Computer_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SulfuricAcid_C": [
		{
			"className": "Recipe_SulfuricAcid_C",
			"name": "Sulfuric Acid",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_Sulfur_C",
					"amount": 5
				},
				{
					"item": "Desc_Water_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedSulfuricAcid_C": [
		{
			"className": "Recipe_PackagedSulfuricAcid_C",
			"name": "Packaged Sulfuric Acid",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 2
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PackagedSulfuricAcid_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_7_C": [
		{
			"className": "Recipe_SpaceElevatorPart_7_C",
			"name": "Assembly Director System",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 80,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_5_C",
					"amount": 2
				},
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_7_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_HighSpeedConnector_C": [
		{
			"className": "Recipe_HighSpeedConnector_C",
			"name": "High-Speed Connector",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - High-Speed Connector OR\u003Cbr\u003E[[Tier 7]] - Control System Development",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 56
				},
				{
					"item": "Desc_Cable_C",
					"amount": 10
				},
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageSulfuricAcid_C": [
		{
			"className": "Recipe_UnpackageSulfuricAcid_C",
			"name": "Unpackage Sulfuric Acid",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_PackagedSulfuricAcid_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 1
				},
				{
					"item": "Desc_FluidCanister_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SuperStateComputer_C": [
		{
			"className": "Recipe_Alternate_SuperStateComputer_C",
			"name": "Super-State Computer",
			"unlockedBy": "[[Tier 8]] - Nuclear Power OR\u003Cbr\u003E[[Tier 7]] - Control System Development",
			"duration": 25,
			"ingredients": [
				{
					"item": "Desc_Computer_C",
					"amount": 3
				},
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 1
				},
				{
					"item": "Desc_Battery_C",
					"amount": 10
				},
				{
					"item": "Desc_Wire_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ElectromagneticControlRod_C": [
		{
			"className": "Recipe_ElectromagneticControlRod_C",
			"name": "Electromagnetic Control Rod",
			"unlockedBy": "[[Tier 8]] - Nuclear Power",
			"duration": 30,
			"ingredients": [
				{
					"item": "Desc_Stator_C",
					"amount": 3
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GeneratorNuclear_C": [
		{
			"className": "Recipe_GeneratorNuclear_C",
			"name": "Nuclear Power Plant",
			"unlockedBy": "[[Tier 8]] - Nuclear Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 25
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 100
				},
				{
					"item": "Desc_Cable_C",
					"amount": 200
				},
				{
					"item": "Desc_Cement_C",
					"amount": 250
				}
			],
			"products": [
				{
					"item": "Desc_GeneratorNuclear_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NuclearFuelRod_C": [
		{
			"className": "Recipe_NuclearFuelRod_C",
			"name": "Uranium Fuel Rod",
			"unlockedBy": "[[Tier 8]] - Nuclear Power",
			"duration": 150,
			"ingredients": [
				{
					"item": "Desc_UraniumCell_C",
					"amount": 50
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 3
				},
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_NuclearFuelRod_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_6_C": [
		{
			"className": "Recipe_SpaceElevatorPart_6_C",
			"name": "Magnetic Field Generator",
			"unlockedBy": "[[Tier 8]] - Nuclear Power",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_2_C",
					"amount": 5
				},
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_6_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SloppyAlumina_C": [
		{
			"className": "Recipe_Alternate_SloppyAlumina_C",
			"name": "Sloppy Alumina",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_OreBauxite_C",
					"amount": 10
				},
				{
					"item": "Desc_Water_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_AluminaSolution_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_RadioControlSystem_C": [
		{
			"className": "Recipe_Alternate_RadioControlSystem_C",
			"name": "Radio Control System",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 40,
			"ingredients": [
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				},
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 10
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 60
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 30
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PlutoniumFuelUnit_C": [
		{
			"className": "Recipe_Alternate_PlutoniumFuelUnit_C",
			"name": "Plutonium Fuel Unit",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_PlutoniumCell_C",
					"amount": 20
				},
				{
					"item": "Desc_PressureConversionCube_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PlutoniumFuelRod_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_OCSupercomputer_C": [
		{
			"className": "Recipe_Alternate_OCSupercomputer_C",
			"name": "OC Supercomputer",
			"unlockedBy": "[[Tier 7]] - Control System Development OR\u003Cbr\u003E[[Tier 8]] - Advanced Aluminum Production",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 2
				},
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_HeatSink_C": [
		{
			"className": "Recipe_HeatSink_C",
			"name": "Heat Sink",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 5
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_AluminumPlateReinforced_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FusedModularFrame_C": [
		{
			"className": "Recipe_FusedModularFrame_C",
			"name": "Fused Modular Frame",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 40,
			"ingredients": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 1
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 50
				},
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FrackingExtractor_C": [
		{
			"className": "Recipe_FrackingExtractor_C",
			"name": "Resource Well Extractor",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 10
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_FrackingExtractor_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FrackingSmasher_C": [
		{
			"className": "Recipe_FrackingSmasher_C",
			"name": "Resource Well Pressurizer",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 25
				},
				{
					"item": "Desc_Motor_C",
					"amount": 50
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 50
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_FrackingSmasher_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GasTank_C": [
		{
			"className": "Recipe_GasTank_C",
			"name": "Empty Fluid Tank",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_GasTank_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PackagedNitrogen_C": [
		{
			"className": "Recipe_PackagedNitrogen_C",
			"name": "Packaged Nitrogen Gas",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 4
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PackagedNitrogenGas_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UnpackageNitrogen_C": [
		{
			"className": "Recipe_UnpackageNitrogen_C",
			"name": "Unpackage Nitrogen Gas",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_PackagedNitrogenGas_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 4
				},
				{
					"item": "Desc_GasTank_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Packager_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_InstantScrap_C": [
		{
			"className": "Recipe_Alternate_InstantScrap_C",
			"name": "Instant Scrap",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement OR\u003Cbr\u003E[[Tier 7]] - Control System Development",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_OreBauxite_C",
					"amount": 15
				},
				{
					"item": "Desc_Coal_C",
					"amount": 10
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 5
				},
				{
					"item": "Desc_Water_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_AluminumScrap_C",
					"amount": 30
				},
				{
					"item": "Desc_Water_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_InstantPlutoniumCell_C": [
		{
			"className": "Recipe_Alternate_InstantPlutoniumCell_C",
			"name": "Instant Plutonium Cell",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_NonFissibleUranium_C",
					"amount": 150
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_PlutoniumCell_C",
					"amount": 20
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": 250,
			"maxPower": 750,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_HeatFusedFrame_C": [
		{
			"className": "Recipe_Alternate_HeatFusedFrame_C",
			"name": "Heat-Fused Frame",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 1
				},
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 50
				},
				{
					"item": "Desc_NitricAcid_C",
					"amount": 8
				},
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_FertileUranium_C": [
		{
			"className": "Recipe_Alternate_FertileUranium_C",
			"name": "Fertile Uranium",
			"unlockedBy": "[[Tier 8]] - Particle Enrichment",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreUranium_C",
					"amount": 5
				},
				{
					"item": "Desc_NuclearWaste_C",
					"amount": 5
				},
				{
					"item": "Desc_NitricAcid_C",
					"amount": 3
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_NonFissibleUranium_C",
					"amount": 20
				},
				{
					"item": "Desc_Water_C",
					"amount": 8
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ElectricMotor_C": [
		{
			"className": "Recipe_Alternate_ElectricMotor_C",
			"name": "Electric Motor",
			"unlockedBy": "[[Tier 8]] - Nuclear Power",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 1
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Motor_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_DilutedFuel_C": [
		{
			"className": "Recipe_Alternate_DilutedFuel_C",
			"name": "Diluted Fuel",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 5
				},
				{
					"item": "Desc_Water_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CoolingDevice_C": [
		{
			"className": "Recipe_Alternate_CoolingDevice_C",
			"name": "Cooling Device",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_AluminumPlateReinforced_C",
					"amount": 4
				},
				{
					"item": "Desc_Motor_C",
					"amount": 1
				},
				{
					"item": "Desc_NitrogenGas_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ClassicBattery_C": [
		{
			"className": "Recipe_Alternate_ClassicBattery_C",
			"name": "Classic Battery",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_Sulfur_C",
					"amount": 6
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 7
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 8
				},
				{
					"item": "Desc_Wire_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_Battery_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_AutomatedMiner_C": [
		{
			"className": "Recipe_Alternate_AutomatedMiner_C",
			"name": "Automated Miner",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 4
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "BP_ItemDescriptorPortableMiner_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_AlcladCasing_C": [
		{
			"className": "Recipe_Alternate_AlcladCasing_C",
			"name": "Alclad Casing",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 20
				},
				{
					"item": "Desc_CopperIngot_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 15
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteelPipe_Molded_C": [
		{
			"className": "Recipe_Alternate_SteelPipe_Molded_C",
			"name": "Molded Steel Pipe",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 5
				},
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteelPipe_Iron_C": [
		{
			"className": "Recipe_Alternate_SteelPipe_Iron_C",
			"name": "Iron Pipe",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteelCastedPlate_C": [
		{
			"className": "Recipe_Alternate_SteelCastedPlate_C",
			"name": "Steel Cast Plate",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_SteelIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteelBeam_Molded_C": [
		{
			"className": "Recipe_Alternate_SteelBeam_Molded_C",
			"name": "Molded Beam",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 24
				},
				{
					"item": "Desc_Cement_C",
					"amount": 16
				}
			],
			"products": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 9
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_SteelBeam_Aluminum_C": [
		{
			"className": "Recipe_Alternate_SteelBeam_Aluminum_C",
			"name": "Aluminum Beam",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_AluminumRod_C": [
		{
			"className": "Recipe_Alternate_AluminumRod_C",
			"name": "Aluminum Rod",
			"unlockedBy": "[[Tier 7]] - Bauxite Refinement",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_AluminumIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronRod_C",
					"amount": 7
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_AILimiter_Plastic_C": [
		{
			"className": "Recipe_Alternate_AILimiter_Plastic_C",
			"name": "Plastic AI Limiter",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - AI Limiter OR\u003Cbr\u003E[[Tier 5]] - Oil Processing",
			"duration": 15,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 30
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 7
				}
			],
			"products": [
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Silica_Distilled_C": [
		{
			"className": "Recipe_Alternate_Silica_Distilled_C",
			"name": "Distilled Silica",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_DissolvedSilica_C",
					"amount": 12
				},
				{
					"item": "Desc_Stone_C",
					"amount": 5
				},
				{
					"item": "Desc_Water_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_Silica_C",
					"amount": 27
				},
				{
					"item": "Desc_Water_C",
					"amount": 8
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Quartz_Purified_C": [
		{
			"className": "Recipe_Alternate_Quartz_Purified_C",
			"name": "Quartz Purification",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 24
				},
				{
					"item": "Desc_NitricAcid_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 15
				},
				{
					"item": "Desc_DissolvedSilica_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Quartz_Fused_C": [
		{
			"className": "Recipe_Alternate_Quartz_Fused_C",
			"name": "Fused Quartz Crystal",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Quartz Crystals OR\u003Cbr\u003E[[Tier 3]] - Basic Steel Production",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 25
				},
				{
					"item": "Desc_Coal_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 18
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_IronIngot_Leached_C": [
		{
			"className": "Recipe_Alternate_IronIngot_Leached_C",
			"name": "Leached Iron ingot",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 5
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_IronIngot_Basic_C": [
		{
			"className": "Recipe_Alternate_IronIngot_Basic_C",
			"name": "Basic Iron Ingot",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 5
				},
				{
					"item": "Desc_Stone_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CopperIngot_Tempered_C": [
		{
			"className": "Recipe_Alternate_CopperIngot_Tempered_C",
			"name": "Tempered Copper Ingot",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreCopper_C",
					"amount": 5
				},
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CopperIngot_Leached_C": [
		{
			"className": "Recipe_Alternate_CopperIngot_Leached_C",
			"name": "Leached Copper Ingot",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreCopper_C",
					"amount": 9
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 22
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CateriumIngot_Tempered_C": [
		{
			"className": "Recipe_Alternate_CateriumIngot_Tempered_C",
			"name": "Tempered Caterium Ingot",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_OreGold_C",
					"amount": 6
				},
				{
					"item": "Desc_PetroleumCoke_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CateriumIngot_Leached_C": [
		{
			"className": "Recipe_Alternate_CateriumIngot_Leached_C",
			"name": "Leached Caterium Ingot",
			"unlockedBy": "[[Tier 7]] - Control System Development",
			"duration": 10,
			"ingredients": [
				{
					"item": "Desc_OreGold_C",
					"amount": 9
				},
				{
					"item": "Desc_SulfuricAcid_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 6
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 99,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Wire_2_C": [
		{
			"className": "Recipe_Alternate_Wire_2_C",
			"name": "Caterium Wire",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Caterium",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Wire_C",
					"amount": 8
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Wire_1_C": [
		{
			"className": "Recipe_Alternate_Wire_1_C",
			"name": "Iron Wire",
			"unlockedBy": "",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Wire_C",
					"amount": 9
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_UraniumCell_1_C": [
		{
			"className": "Recipe_Alternate_UraniumCell_1_C",
			"name": "Infused Uranium Cell",
			"unlockedBy": "[[Tier 8]] - Nuclear Power OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - Caterium Ingots OR\u003Cbr\u003E[[Quartz Research|MAM Quartz Research]] - Quartz OR\u003Cbr\u003E[[Sulfur Research|MAM Sulfur Research]] - Sulfur",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreUranium_C",
					"amount": 5
				},
				{
					"item": "Desc_Silica_C",
					"amount": 3
				},
				{
					"item": "Desc_Sulfur_C",
					"amount": 5
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 15
				}
			],
			"products": [
				{
					"item": "Desc_UraniumCell_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DroneStation_C": [
		{
			"className": "Recipe_DroneStation_C",
			"name": "Drone Port",
			"unlockedBy": "[[Tier 8]] - Aeronautical Engineering",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 20
				},
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 20
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 50
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 50
				},
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_DroneStation_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DroneTransport_C": [
		{
			"className": "Recipe_DroneTransport_C",
			"name": "Drone",
			"unlockedBy": "[[Tier 8]] - Aeronautical Engineering",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 4
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 1
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 2
				},
				{
					"item": "BP_ItemDescriptorPortableMiner_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_DroneTransport_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IngotCaterium_C": [
		{
			"className": "Recipe_IngotCaterium_C",
			"name": "Caterium Ingot",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Caterium Ingots OR\u003Cbr\u003E[[Tier 5]] - Petroleum Power",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_OreGold_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_SmelterMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_TurboMotor_1_C": [
		{
			"className": "Recipe_Alternate_TurboMotor_1_C",
			"name": "Turbo Electric Motor",
			"unlockedBy": "[[Tier 8]] - Leading-Edge Production OR\u003Cbr\u003E[[Tier 8]] - Nuclear Power",
			"duration": 64,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 7
				},
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 9
				},
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 5
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 7
				}
			],
			"products": [
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorBeltMk5_C": [
		{
			"className": "Recipe_ConveyorBeltMk5_C",
			"name": "Conveyor Belt Mk.5",
			"unlockedBy": "[[Tier 7]] - Logistics Mk.5",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorBeltMk5_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorLiftMk5_C": [
		{
			"className": "Recipe_ConveyorLiftMk5_C",
			"name": "Conveyor Lift Mk.5",
			"unlockedBy": "[[Tier 7]] - Logistics Mk.5",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorLiftMk5_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_MinerMk3_C": [
		{
			"className": "Recipe_MinerMk3_C",
			"name": "Miner Mk.3",
			"unlockedBy": "[[Tier 8]] - Leading-Edge Production",
			"duration": 1,
			"ingredients": [
				{
					"item": "BP_ItemDescriptorPortableMiner_C",
					"amount": 3
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 50
				},
				{
					"item": "Desc_ComputerSuper_C",
					"amount": 5
				},
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 10
				},
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_MinerMk3_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_MotorTurbo_C": [
		{
			"className": "Recipe_MotorTurbo_C",
			"name": "Turbo Motor",
			"unlockedBy": "[[Tier 8]] - Leading-Edge Production",
			"duration": 32,
			"ingredients": [
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 4
				},
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 2
				},
				{
					"item": "Desc_Motor_C",
					"amount": 4
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 24
				}
			],
			"products": [
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_8_C": [
		{
			"className": "Recipe_SpaceElevatorPart_8_C",
			"name": "Thermal Propulsion Rocket",
			"unlockedBy": "[[Tier 8]] - Leading-Edge Production",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_4_C",
					"amount": 5
				},
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 2
				},
				{
					"item": "Desc_CoolingSystem_C",
					"amount": 6
				},
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_8_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Stator_C": [
		{
			"className": "Recipe_Alternate_Stator_C",
			"name": "Quickwire Stator",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - Caterium Ingots",
			"duration": 15,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 4
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 15
				}
			],
			"products": [
				{
					"item": "Desc_Stator_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Silica_C": [
		{
			"className": "Recipe_Alternate_Silica_C",
			"name": "Cheap Silica",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Silica",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_RawQuartz_C",
					"amount": 3
				},
				{
					"item": "Desc_Stone_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Silica_C",
					"amount": 7
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Screw_2_C": [
		{
			"className": "Recipe_Alternate_Screw_2_C",
			"name": "Steel Screw",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronScrew_C",
					"amount": 52
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Screw_C": [
		{
			"className": "Recipe_Alternate_Screw_C",
			"name": "Cast Screw",
			"unlockedBy": "",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_IronScrew_C",
					"amount": 20
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Rotor_C": [
		{
			"className": "Recipe_Alternate_Rotor_C",
			"name": "Steel Rotor",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 2
				},
				{
					"item": "Desc_Wire_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_Rotor_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_EncasedIndustrialBeam_C": [
		{
			"className": "Recipe_Alternate_EncasedIndustrialBeam_C",
			"name": "Encased Industrial Pipe",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production",
			"duration": 15,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 6
				},
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ReinforcedIronPlate_2_C": [
		{
			"className": "Recipe_Alternate_ReinforcedIronPlate_2_C",
			"name": "Stitched Iron Plate",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 32,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 10
				},
				{
					"item": "Desc_Wire_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ReinforcedIronPlate_1_C": [
		{
			"className": "Recipe_Alternate_ReinforcedIronPlate_1_C",
			"name": "Bolted Iron Plate",
			"unlockedBy": "[[Tier 2]] - Part Assembly",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 18
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_RadioControlUnit_1_C": [
		{
			"className": "Recipe_Alternate_RadioControlUnit_1_C",
			"name": "Radio Connection Unit",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - AI Limiter",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_AluminumPlateReinforced_C",
					"amount": 4
				},
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 2
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Quickwire_C": [
		{
			"className": "Recipe_Alternate_Quickwire_C",
			"name": "Fused Quickwire",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Caterium Ingots",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 1
				},
				{
					"item": "Desc_CopperIngot_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Plastic_1_C": [
		{
			"className": "Recipe_Alternate_Plastic_1_C",
			"name": "Recycled Plastic",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Rubber_C",
					"amount": 6
				},
				{
					"item": "Desc_LiquidFuel_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_Plastic_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_NuclearFuelRod_1_C": [
		{
			"className": "Recipe_Alternate_NuclearFuelRod_1_C",
			"name": "Uranium Fuel Unit",
			"unlockedBy": "[[Tier 8]] - Nuclear Power OR\u003Cbr\u003E[[Quartz Research|MAM Quartz Research]] - Quartz Crystals",
			"duration": 300,
			"ingredients": [
				{
					"item": "Desc_UraniumCell_C",
					"amount": 100
				},
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 10
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 3
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_NuclearFuelRod_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Motor_1_C": [
		{
			"className": "Recipe_Alternate_Motor_1_C",
			"name": "Rigor Motor",
			"unlockedBy": "[[Tier 4]] - Advanced Steel Production OR\u003Cbr\u003E[[Quartz Research|MAM Quartz Research]] - Quartz Crystals",
			"duration": 48,
			"ingredients": [
				{
					"item": "Desc_Rotor_C",
					"amount": 3
				},
				{
					"item": "Desc_Stator_C",
					"amount": 3
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Motor_C",
					"amount": 6
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ModularFrame_C": [
		{
			"className": "Recipe_Alternate_ModularFrame_C",
			"name": "Steeled Frame",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_IngotSteel_2_C": [
		{
			"className": "Recipe_Alternate_IngotSteel_2_C",
			"name": "Compacted Steel Ingot",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal OR\u003Cbr\u003E[[Tier 3]] - Basic Steel Production",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 2
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_IngotSteel_1_C": [
		{
			"className": "Recipe_Alternate_IngotSteel_1_C",
			"name": "Solid Steel Ingot",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 2
				},
				{
					"item": "Desc_Coal_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SteelIngot_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_IngotIron_C": [
		{
			"className": "Recipe_Alternate_IngotIron_C",
			"name": "Iron Alloy Ingot",
			"unlockedBy": "[[Tier 3]] - Basic Steel Production",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_OreIron_C",
					"amount": 8
				},
				{
					"item": "Desc_OreCopper_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_IronIngot_C",
					"amount": 15
				}
			],
			"producedIn": [
				"Desc_FoundryMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_HighSpeedConnector_C": [
		{
			"className": "Recipe_Alternate_HighSpeedConnector_C",
			"name": "Silicon High-Speed Connector",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - High-Speed Connector OR\u003Cbr\u003E[[Tier 5]] - Oil Processing OR\u003Cbr\u003E[[Quartz Research|MAM Quartz Research]] - Quartz",
			"duration": 40,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 60
				},
				{
					"item": "Desc_Silica_C",
					"amount": 25
				},
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ModularFrameHeavy_C": [
		{
			"className": "Recipe_Alternate_ModularFrameHeavy_C",
			"name": "Heavy Encased Frame",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing",
			"duration": 64,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 8
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 36
				},
				{
					"item": "Desc_Cement_C",
					"amount": 22
				}
			],
			"products": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 3
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_HeatSink_1_C": [
		{
			"className": "Recipe_Alternate_HeatSink_1_C",
			"name": "Heat Exchanger",
			"unlockedBy": "[[Tier 8]] - Advanced Aluminum Production",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 3
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_AluminumPlateReinforced_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Gunpowder_1_C": [
		{
			"className": "Recipe_Alternate_Gunpowder_1_C",
			"name": "Fine Black Powder",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Compacted Coal",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_Sulfur_C",
					"amount": 1
				},
				{
					"item": "Desc_CompactedCoal_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Gunpowder_C",
					"amount": 6
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_ElectromagneticControlRod_1_C": [
		{
			"className": "Recipe_Alternate_ElectromagneticControlRod_1_C",
			"name": "Electromagnetic Connection Rod",
			"unlockedBy": "[[Tier 8]] - Nuclear Power OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - AI Limiter",
			"duration": 15,
			"ingredients": [
				{
					"item": "Desc_Stator_C",
					"amount": 2
				},
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CrystalOscillator_C": [
		{
			"className": "Recipe_Alternate_CrystalOscillator_C",
			"name": "Insulated Crystal Oscillator",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Crystal Oscillator OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - Caterium Electronics OR\u003Cbr\u003E[[Tier 5]] - Oil Processing",
			"duration": 32,
			"ingredients": [
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 10
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 7
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Concrete_C": [
		{
			"className": "Recipe_Alternate_Concrete_C",
			"name": "Fine Concrete",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Quartz",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 3
				},
				{
					"item": "Desc_Stone_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_Cement_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Computer_2_C": [
		{
			"className": "Recipe_Alternate_Computer_2_C",
			"name": "Crystal Computer",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing OR\u003Cbr\u003E[[Quartz Research|MAM Quartz Research]] - Quartz Crystals",
			"duration": 36,
			"ingredients": [
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 3
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Computer_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Computer_1_C": [
		{
			"className": "Recipe_Alternate_Computer_1_C",
			"name": "Caterium Computer",
			"unlockedBy": "[[Tier 6]] - Industrial Manufacturing OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - Caterium Ingots",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 4
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 14
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_Computer_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CircuitBoard_2_C": [
		{
			"className": "Recipe_Alternate_CircuitBoard_2_C",
			"name": "Caterium Circuit Board",
			"unlockedBy": "[[Tier 5]] - Oil Processing OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - Caterium Ingots",
			"duration": 48,
			"ingredients": [
				{
					"item": "Desc_Plastic_C",
					"amount": 10
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 30
				}
			],
			"products": [
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 7
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_CircuitBoard_1_C": [
		{
			"className": "Recipe_Alternate_CircuitBoard_1_C",
			"name": "Silicon Circuit Board",
			"unlockedBy": "[[Tier 5]] - Oil Processing OR\u003Cbr\u003E[[Quartz Research|MAM Quartz Research]] - Quartz",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 11
				},
				{
					"item": "Desc_Silica_C",
					"amount": 11
				}
			],
			"products": [
				{
					"item": "Desc_CircuitBoard_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Cable_2_C": [
		{
			"className": "Recipe_Alternate_Cable_2_C",
			"name": "Quickwire Cable",
			"unlockedBy": "[[Tier 5]] - Oil Processing OR\u003Cbr\u003E[[Caterium Research|MAM Caterium Research]] - Caterium Ingots",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 3
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Cable_C",
					"amount": 11
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_Cable_1_C": [
		{
			"className": "Recipe_Alternate_Cable_1_C",
			"name": "Insulated Cable",
			"unlockedBy": "[[Tier 5]] - Oil Processing",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Wire_C",
					"amount": 9
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_Cable_C",
					"amount": 20
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorBeltMk6_C": [
		{
			"className": "Recipe_ConveyorBeltMk6_C",
			"name": "Conveyor Belt Mk.6",
			"unlockedBy": "[[Tier 9]] - Peak Efficiency",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 1
				},
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorBeltMk6_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorLiftMk6_C": [
		{
			"className": "Recipe_ConveyorLiftMk6_C",
			"name": "Conveyor Lift Mk.6",
			"unlockedBy": "[[Tier 9]] - Peak Efficiency",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 2
				},
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorLiftMk6_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ficsonium_C": [
		{
			"className": "Recipe_Ficsonium_C",
			"name": "Ficsonium",
			"unlockedBy": "[[Tier 9]] - Peak Efficiency",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_PlutoniumWaste_C",
					"amount": 1
				},
				{
					"item": "Desc_SingularityCell_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_Ficsonium_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_HadronCollider_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": 500,
			"maxPower": 1500,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FicsoniumFuelRod_C": [
		{
			"className": "Recipe_FicsoniumFuelRod_C",
			"name": "Ficsonium Fuel Rod",
			"unlockedBy": "[[Tier 9]] - Peak Efficiency",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_Ficsonium_C",
					"amount": 2
				},
				{
					"item": "Desc_ElectromagneticControlRod_C",
					"amount": 2
				},
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 40
				},
				{
					"item": "Desc_QuantumEnergy_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_FicsoniumFuelRod_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 20
				}
			],
			"producedIn": [
				"Desc_QuantumEncoder_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 0,
			"maxPower": 2000,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Portal_C": [
		{
			"className": "Recipe_Portal_C",
			"name": "Main Portal",
			"unlockedBy": "[[Tier 9]] - Spatial Energy Regulation",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_MotorLightweight_C",
					"amount": 5
				},
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 10
				},
				{
					"item": "Desc_QuantumOscillator_C",
					"amount": 15
				},
				{
					"item": "Desc_SAMFluctuator_C",
					"amount": 25
				},
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_Portal_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PortalSatellite_C": [
		{
			"className": "Recipe_PortalSatellite_C",
			"name": "Satellite Portal",
			"unlockedBy": "[[Tier 9]] - Spatial Energy Regulation",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrameLightweight_C",
					"amount": 5
				},
				{
					"item": "Desc_QuantumOscillator_C",
					"amount": 10
				},
				{
					"item": "Desc_SAMFluctuator_C",
					"amount": 25
				},
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_PortalSatellite_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SingularityCell_C": [
		{
			"className": "Recipe_SingularityCell_C",
			"name": "Singularity Cell",
			"unlockedBy": "[[Tier 9]] - Spatial Energy Regulation",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_9_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkMatter_C",
					"amount": 20
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 100
				},
				{
					"item": "Desc_Cement_C",
					"amount": 200
				}
			],
			"products": [
				{
					"item": "Desc_SingularityCell_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 0,
			"maxPower": 0,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevatorPart_11_C": [
		{
			"className": "Recipe_SpaceElevatorPart_11_C",
			"name": "Ballistic Warp Drive",
			"unlockedBy": "[[Tier 9]] - Spatial Energy Regulation",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_SpaceElevatorPart_8_C",
					"amount": 1
				},
				{
					"item": "Desc_SingularityCell_C",
					"amount": 5
				},
				{
					"item": "Desc_QuantumOscillator_C",
					"amount": 2
				},
				{
					"item": "Desc_DarkMatter_C",
					"amount": 40
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevatorPart_11_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 500,
			"maxPower": 1500,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_BlueprintDesigner_Mk3_C": [
		{
			"className": "Recipe_BlueprintDesigner_Mk3_C",
			"name": "Blueprint Designer Mk.3",
			"unlockedBy": "[[Tier 9]] - FICSIT Blueprints Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_TemporalProcessor_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrameFused_C",
					"amount": 20
				},
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 50
				},
				{
					"item": "Desc_FicsiteMesh_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_BlueprintDesigner_MK3_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Hoverpack_C": [
		{
			"className": "Recipe_Hoverpack_C",
			"name": "Hoverpack",
			"unlockedBy": "[[Tier 7]] - Hoverpack",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 8
				},
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 4
				},
				{
					"item": "Desc_Computer_C",
					"amount": 8
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 40
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorHoverPack_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FilterHazmat_C": [
		{
			"className": "Recipe_FilterHazmat_C",
			"name": "Iodine-Infused Filter",
			"unlockedBy": "[[Tier 7]] - Hazmat Suit",
			"duration": 16,
			"ingredients": [
				{
					"item": "Desc_Filter_C",
					"amount": 1
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 8
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_HazmatFilter_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_HazmatSuit_C": [
		{
			"className": "Recipe_HazmatSuit_C",
			"name": "Hazmat Suit",
			"unlockedBy": "[[Tier 7]] - Hazmat Suit",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_Rubber_C",
					"amount": 50
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 50
				},
				{
					"item": "Desc_AluminumPlate_C",
					"amount": 50
				},
				{
					"item": "Desc_Fabric_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorHazmatSuit_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RailroadBlockSignal_C": [
		{
			"className": "Recipe_RailroadBlockSignal_C",
			"name": "Block Signal",
			"unlockedBy": "[[Tier 6]] - Railway Signalling",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 2
				},
				{
					"item": "Desc_Computer_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_RailroadBlockSignal_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RailroadPathSignal_C": [
		{
			"className": "Recipe_RailroadPathSignal_C",
			"name": "Path Signal",
			"unlockedBy": "[[Tier 6]] - Railway Signalling",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 2
				},
				{
					"item": "Desc_Computer_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_RailroadPathSignal_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_BlueprintDesigner_Mk2_C": [
		{
			"className": "Recipe_BlueprintDesigner_Mk2_C",
			"name": "Blueprint Designer Mk.2",
			"unlockedBy": "[[Tier 6]] - FICSIT Blueprints Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 10
				},
				{
					"item": "Desc_Computer_C",
					"amount": 20
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 100
				},
				{
					"item": "Desc_Cement_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_BlueprintDesigner_MK2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipelineMK2_C": [
		{
			"className": "Recipe_PipelineMK2_C",
			"name": "Pipeline Mk.2",
			"unlockedBy": "[[Tier 6]] - Pipeline Engineering Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 2
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PipelineMK2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipelinePumpMK2_C": [
		{
			"className": "Recipe_PipelinePumpMK2_C",
			"name": "Pipeline Pump Mk.2",
			"unlockedBy": "[[Tier 6]] - Pipeline Engineering Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 1
				},
				{
					"item": "Desc_Motor_C",
					"amount": 2
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_PipelinePumpMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TrainDockingStation_C": [
		{
			"className": "Recipe_TrainDockingStation_C",
			"name": "Freight Platform",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 5
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 25
				},
				{
					"item": "Desc_Cement_C",
					"amount": 50
				},
				{
					"item": "Desc_Wire_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_TrainDockingStation_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TrainDockingStationLiquid_C": [
		{
			"className": "Recipe_TrainDockingStationLiquid_C",
			"name": "Fluid Freight Platform",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 5
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 25
				},
				{
					"item": "Desc_Cement_C",
					"amount": 50
				},
				{
					"item": "Desc_Wire_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_TrainDockingStationLiquid_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TrainPlatformEmpty_C": [
		{
			"className": "Recipe_TrainPlatformEmpty_C",
			"name": "Empty Platform",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_Cement_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_TrainPlatformEmpty_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TrainPlatformEmpty_02_C": [
		{
			"className": "Recipe_TrainPlatformEmpty_02_C",
			"name": "Empty Platform With Catwalk",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_Cement_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_TrainPlatformEmpty_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TrainStation_C": [
		{
			"className": "Recipe_TrainStation_C",
			"name": "Train Station",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 10
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 50
				},
				{
					"item": "Desc_Cement_C",
					"amount": 50
				},
				{
					"item": "Desc_Wire_C",
					"amount": 200
				}
			],
			"products": [
				{
					"item": "Desc_TrainStation_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RailroadTrack_C": [
		{
			"className": "Recipe_RailroadTrack_C",
			"name": "Railway",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPipe_C",
					"amount": 1
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_RailroadTrack_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FreightWagon_C": [
		{
			"className": "Recipe_FreightWagon_C",
			"name": "Freight Car",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 5
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_FreightWagon_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Locomotive_C": [
		{
			"className": "Recipe_Locomotive_C",
			"name": "Electric Locomotive",
			"unlockedBy": "[[Tier 6]] - Monorail Train Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 5
				},
				{
					"item": "Desc_Motor_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 20
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 20
				},
				{
					"item": "Desc_Wire_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_Locomotive_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_JetPack_C": [
		{
			"className": "Recipe_JetPack_C",
			"name": "Jetpack",
			"unlockedBy": "[[Tier 5]] - Jetpack",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 5
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 10
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 25
				},
				{
					"item": "Desc_Wire_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorJetPack_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorBeltMk4_C": [
		{
			"className": "Recipe_ConveyorBeltMk4_C",
			"name": "Conveyor Belt Mk.4",
			"unlockedBy": "[[Tier 5]] - Logistics Mk.4",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorBeltMk4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorLiftMk4_C": [
		{
			"className": "Recipe_ConveyorLiftMk4_C",
			"name": "Conveyor Lift Mk.4",
			"unlockedBy": "[[Tier 5]] - Logistics Mk.4",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorLiftMk4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Truck_C": [
		{
			"className": "Recipe_Truck_C",
			"name": "Truck",
			"unlockedBy": "[[Tier 5]] - Logistics Mk.4",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 15
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 20
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 20
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_Truck_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GeneratorFuel_C": [
		{
			"className": "Recipe_GeneratorFuel_C",
			"name": "Fuel-Powered Generator",
			"unlockedBy": "[[Tier 5]] - Petroleum Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 15
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 15
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 30
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 50
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_GeneratorFuel_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IndustrialTank_C": [
		{
			"className": "Recipe_IndustrialTank_C",
			"name": "Industrial Fluid Buffer",
			"unlockedBy": "[[Tier 5]] - Petroleum Power",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 5
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 10
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_IndustrialTank_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Quickwire_C": [
		{
			"className": "Recipe_Quickwire_C",
			"name": "Quickwire",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Quickwire OR\u003Cbr\u003E[[Tier 5]] - Petroleum Power",
			"duration": 5,
			"ingredients": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorBeltMk3_C": [
		{
			"className": "Recipe_ConveyorBeltMk3_C",
			"name": "Conveyor Belt Mk.3",
			"unlockedBy": "[[Tier 4]] - Logistics Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorBeltMk3_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorLiftMk3_C": [
		{
			"className": "Recipe_ConveyorLiftMk3_C",
			"name": "Conveyor Lift Mk.3",
			"unlockedBy": "[[Tier 4]] - Logistics Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorLiftMk3_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeSupportStackable_C": [
		{
			"className": "Recipe_PipeSupportStackable_C",
			"name": "Stackable Pipeline Support",
			"unlockedBy": "[[Tier 4]] - Logistics Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 4
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PipeSupportStackable_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StorageContainerMk2_C": [
		{
			"className": "Recipe_StorageContainerMk2_C",
			"name": "Industrial Storage Container",
			"unlockedBy": "[[Tier 4]] - Logistics Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 20
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_StorageContainerMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_BlueprintDesigner_C": [
		{
			"className": "Recipe_BlueprintDesigner_C",
			"name": "Blueprint Designer Mk.1",
			"unlockedBy": "[[Tier 4]] - FICSIT Blueprints",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 15
				},
				{
					"item": "Desc_Cable_C",
					"amount": 25
				},
				{
					"item": "Desc_Cement_C",
					"amount": 100
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_BlueprintDesigner_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeHyperStart_C": [
		{
			"className": "Recipe_PipeHyperStart_C",
			"name": "Hypertube Entrance",
			"unlockedBy": "[[Tier 4]] - Hypertubes",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 4
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 4
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_PipeHyperStart_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_HyperPoleStackable_C": [
		{
			"className": "Recipe_HyperPoleStackable_C",
			"name": "Stackable Hypertube Support",
			"unlockedBy": "[[Tier 4]] - Hypertubes",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 4
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_HyperPoleStackable_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_HyperTubeWallSupport_C": [
		{
			"className": "Recipe_HyperTubeWallSupport_C",
			"name": "Hypertube Wall Support",
			"unlockedBy": "[[AWESOME Shop]] - Hypertube Wall Attachments",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_HyperTubeWallSupport_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeHyperSupport_C": [
		{
			"className": "Recipe_PipeHyperSupport_C",
			"name": "Hypertube Support",
			"unlockedBy": "[[Tier 4]] - Hypertubes",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PipeHyperSupport_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeHyper_C": [
		{
			"className": "Recipe_PipeHyper_C",
			"name": "Hypertube",
			"unlockedBy": "[[Tier 4]] - Hypertubes",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 1
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PipeHyper_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerStorageMk1_C": [
		{
			"className": "Recipe_PowerStorageMk1_C",
			"name": "Power Storage",
			"unlockedBy": "[[Tier 4]] - Expanded Power Infrastructure",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 5
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 10
				},
				{
					"item": "Desc_Wire_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_PowerStorageMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerTower_C": [
		{
			"className": "Recipe_PowerTower_C",
			"name": "Power Tower",
			"unlockedBy": "[[Tier 4]] - Expanded Power Infrastructure",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 10
				},
				{
					"item": "Desc_Wire_C",
					"amount": 20
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_PowerTower_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerTowerPlatform_C": [
		{
			"className": "Recipe_PowerTowerPlatform_C",
			"name": "Power Tower Platform",
			"unlockedBy": "[[Tier 4]] - Expanded Power Infrastructure",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 10
				},
				{
					"item": "Desc_Wire_C",
					"amount": 20
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_PowerTowerPlatform_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_XenoBasher_C": [
		{
			"className": "Recipe_XenoBasher_C",
			"name": "Xeno-Basher",
			"unlockedBy": "[[Tier 3]] - Enhanced Asset Security",
			"duration": 80,
			"ingredients": [
				{
					"item": "BP_EquipmentDescriptorShockShank_C",
					"amount": 2
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 5
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 25
				},
				{
					"item": "Desc_Wire_C",
					"amount": 500
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorStunSpear_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TruckStation_C": [
		{
			"className": "Recipe_TruckStation_C",
			"name": "Truck Station",
			"unlockedBy": "[[Tier 3]] - Vehicular Transport",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 15
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 20
				},
				{
					"item": "Desc_Cable_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_TruckStation_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Tractor_C": [
		{
			"className": "Recipe_Tractor_C",
			"name": "Tractor",
			"unlockedBy": "[[Tier 3]] - Vehicular Transport",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrame_C",
					"amount": 5
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 5
				},
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_Tractor_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorBeltMk2_C": [
		{
			"className": "Recipe_ConveyorBeltMk2_C",
			"name": "Conveyor Belt Mk.2",
			"unlockedBy": "[[Tier 2]] - Logistics Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorBeltMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorLiftMk2_C": [
		{
			"className": "Recipe_ConveyorLiftMk2_C",
			"name": "Conveyor Lift Mk.2",
			"unlockedBy": "[[Tier 2]] - Logistics Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorLiftMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorPoleStackable_C": [
		{
			"className": "Recipe_ConveyorPoleStackable_C",
			"name": "Stackable Conveyor Pole",
			"unlockedBy": "[[Tier 2]] - Logistics Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorPoleStackable_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_JumpPadAdjustable_C": [
		{
			"className": "Recipe_JumpPadAdjustable_C",
			"name": "Jump Pad",
			"unlockedBy": "[[Tier 2]] - Jump Pads",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 15
				},
				{
					"item": "Desc_Cable_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_JumpPadAdjustable_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_UJellyLandingPad_C": [
		{
			"className": "Recipe_UJellyLandingPad_C",
			"name": "U-Jelly Landing Pad",
			"unlockedBy": "[[Tier 2]] - Jump Pads",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				},
				{
					"item": "Desc_Cable_C",
					"amount": 20
				},
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 200
				}
			],
			"products": [
				{
					"item": "Desc_LandingPad_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Biofuel_C": [
		{
			"className": "Recipe_Biofuel_C",
			"name": "Solid Biofuel",
			"unlockedBy": "[[Tier 2]] - Obstacle Clearing",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_Biofuel_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Chainsaw_C": [
		{
			"className": "Recipe_Chainsaw_C",
			"name": "Chainsaw",
			"unlockedBy": "[[Tier 2]] - Obstacle Clearing",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 5
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 25
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 160
				},
				{
					"item": "Desc_Cable_C",
					"amount": 15
				}
			],
			"products": [
				{
					"item": "Desc_Chainsaw_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Protein_Hog_C": [
		{
			"className": "Recipe_Protein_Hog_C",
			"name": "Hog Protein",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - Hog Research",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_HogParts_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Protein_Spitter_C": [
		{
			"className": "Recipe_Protein_Spitter_C",
			"name": "Spitter Protein",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - Spitter Research",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_SpitterParts_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Biomass_Mycelia_C": [
		{
			"className": "Recipe_Biomass_Mycelia_C",
			"name": "Biomass (Mycelia)",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Mycelia",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Mycelia_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerCrystalShard_1_C": [
		{
			"className": "Recipe_PowerCrystalShard_1_C",
			"name": "Power Shard (1)",
			"unlockedBy": "[[Power Slugs Research|MAM Power Slugs Research]] - Blue Power Slugs",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_Crystal_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CrystalShard_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Gunpowder_C": [
		{
			"className": "Recipe_Gunpowder_C",
			"name": "Black Powder",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Black Powder",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Coal_C",
					"amount": 1
				},
				{
					"item": "Desc_Sulfur_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Gunpowder_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Mam_C": [
		{
			"className": "Recipe_Mam_C",
			"name": "MAM",
			"unlockedBy": "[[Tier 1]] - Field Research",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 5
				},
				{
					"item": "Desc_Cable_C",
					"amount": 15
				},
				{
					"item": "Desc_Wire_C",
					"amount": 45
				}
			],
			"products": [
				{
					"item": "Desc_Mam_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StoragePlayer_C": [
		{
			"className": "Recipe_StoragePlayer_C",
			"name": "Personal Storage Box",
			"unlockedBy": "[[Tier 1]] - Field Research",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 6
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_StoragePlayer_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ObjectScanner_C": [
		{
			"className": "Recipe_ObjectScanner_C",
			"name": "Object Scanner",
			"unlockedBy": "[[Tier 1]] - Field Research",
			"duration": 40,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 4
				},
				{
					"item": "Desc_Wire_C",
					"amount": 20
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorObjectScanner_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorAttachmentMerger_C": [
		{
			"className": "Recipe_ConveyorAttachmentMerger_C",
			"name": "Conveyor Merger",
			"unlockedBy": "[[Tier 1]] - Logistics",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorAttachmentMerger_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorAttachmentSplitter_C": [
		{
			"className": "Recipe_ConveyorAttachmentSplitter_C",
			"name": "Conveyor Splitter",
			"unlockedBy": "[[Tier 1]] - Logistics",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cable_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorAttachmentSplitter_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorLiftMk1_C": [
		{
			"className": "Recipe_ConveyorLiftMk1_C",
			"name": "Conveyor Lift Mk.1",
			"unlockedBy": "[[Tier 1]] - Logistics",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorLiftMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Ficsit_4x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Ficsit_4x1_C",
			"name": "Half Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Half Foundation Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Ficsit_4x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Ficsit_4x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Ficsit_4x2_C",
			"name": "Half Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Half Foundation Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Ficsit_4x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Ficsit_4x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Ficsit_4x4_C",
			"name": "Half Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Half Foundation Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Ficsit_4x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Ficsit_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Ficsit_8x1_C",
			"name": "Inner Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipe Extensions Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Ficsit_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Ficsit_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Ficsit_8x2_C",
			"name": "Inner Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipe Extensions Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Ficsit_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Ficsit_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Ficsit_8x4_C",
			"name": "Inner Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipe Extensions Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Ficsit_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x1_C",
			"name": "Outer Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipe Extensions Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Ficsit_4x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x2_C",
			"name": "Outer Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipe Extensions Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Ficsit_4x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Ficsit_4x4_C",
			"name": "Outer Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipe Extensions Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Ficsit_4x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_FicsitSet_8x1_01_C": [
		{
			"className": "Recipe_Stair_FicsitSet_8x1_01_C",
			"name": "Foundation Stairs (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Foundation Stairs Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_FicsitSet_8x1_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_FicsitSet_8x2_01_C": [
		{
			"className": "Recipe_Stair_FicsitSet_8x2_01_C",
			"name": "Foundation Stairs (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Foundation Stairs Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_FicsitSet_8x2_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_FicsitSet_8x4_01_C": [
		{
			"className": "Recipe_Stair_FicsitSet_8x4_01_C",
			"name": "Foundation Stairs (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Foundation Stairs Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_FicsitSet_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_8x1_01_C": [
		{
			"className": "Recipe_Foundation_8x1_01_C",
			"name": "Foundation (1 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_8x1_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_8x2_01_C": [
		{
			"className": "Recipe_Foundation_8x2_01_C",
			"name": "Foundation (2 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_8x2_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_8x4_01_C": [
		{
			"className": "Recipe_Foundation_8x4_01_C",
			"name": "Foundation (4 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipe_C": [
		{
			"className": "Recipe_QuarterPipe_C",
			"name": "Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipes Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipe_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipe_02_C": [
		{
			"className": "Recipe_QuarterPipe_02_C",
			"name": "Inverted Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipes Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipe_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeCorner_01_C": [
		{
			"className": "Recipe_QuarterPipeCorner_01_C",
			"name": "Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipes Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeCorner_02_C": [
		{
			"className": "Recipe_QuarterPipeCorner_02_C",
			"name": "Inverted Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipes Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeCorner_03_C": [
		{
			"className": "Recipe_QuarterPipeCorner_03_C",
			"name": "Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipes Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeCorner_04_C": [
		{
			"className": "Recipe_QuarterPipeCorner_04_C",
			"name": "Inverted Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Quarter Pipes Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeCorner_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_8x1_01_C": [
		{
			"className": "Recipe_Ramp_8x1_01_C",
			"name": "Ramp (1 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_8x1_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_8x2_01_C": [
		{
			"className": "Recipe_Ramp_8x2_01_C",
			"name": "Ramp (2 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_8x2_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_8x4_01_C": [
		{
			"className": "Recipe_Ramp_8x4_01_C",
			"name": "Ramp (4 m)",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_8x4_Inverted_01_C": [
		{
			"className": "Recipe_Ramp_8x4_Inverted_01_C",
			"name": "Inverted Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_8x4_Inverted_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_8x8x8_C": [
		{
			"className": "Recipe_Ramp_8x8x8_C",
			"name": "Double Ramp (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_8x8x8_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Diagonal_8x1_01_C": [
		{
			"className": "Recipe_Ramp_Diagonal_8x1_01_C",
			"name": "Down Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Diagonal_8x1_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Diagonal_8x1_02_C": [
		{
			"className": "Recipe_Ramp_Diagonal_8x1_02_C",
			"name": "Up Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Diagonal_8x1_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Diagonal_8x2_01_C": [
		{
			"className": "Recipe_Ramp_Diagonal_8x2_01_C",
			"name": "Down Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Diagonal_8x2_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Diagonal_8x2_02_C": [
		{
			"className": "Recipe_Ramp_Diagonal_8x2_02_C",
			"name": "Up Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Diagonal_8x2_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Diagonal_8x4_01_C": [
		{
			"className": "Recipe_Ramp_Diagonal_8x4_01_C",
			"name": "Down Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Diagonal_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Diagonal_8x4_02_C": [
		{
			"className": "Recipe_Ramp_Diagonal_8x4_02_C",
			"name": "Up Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Diagonal_8x4_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_C": [
		{
			"className": "Recipe_RampDouble_C",
			"name": "Double Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_8x1_C": [
		{
			"className": "Recipe_RampDouble_8x1_C",
			"name": "Double Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x1_C": [
		{
			"className": "Recipe_RampInverted_8x1_C",
			"name": "Inverted Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x1_Corner_01_C": [
		{
			"className": "Recipe_RampInverted_8x1_Corner_01_C",
			"name": "Inverted Up Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x1_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x1_Corner_02_C": [
		{
			"className": "Recipe_RampInverted_8x1_Corner_02_C",
			"name": "Inverted Down Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x1_Corner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x2_01_C": [
		{
			"className": "Recipe_RampInverted_8x2_01_C",
			"name": "Inverted Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x2_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x2_Corner_01_C": [
		{
			"className": "Recipe_RampInverted_8x2_Corner_01_C",
			"name": "Inverted Up Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x2_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x2_Corner_02_C": [
		{
			"className": "Recipe_RampInverted_8x2_Corner_02_C",
			"name": "Inverted Down Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x2_Corner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x4_Corner_01_C": [
		{
			"className": "Recipe_RampInverted_8x4_Corner_01_C",
			"name": "Inverted Up Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x4_Corner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampInverted_8x4_Corner_02_C": [
		{
			"className": "Recipe_RampInverted_8x4_Corner_02_C",
			"name": "Inverted Down Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampInverted_8x4_Corner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_LookoutTower_C": [
		{
			"className": "Recipe_LookoutTower_C",
			"name": "Lookout Tower",
			"unlockedBy": "[[Tier 1]] - Base Building",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 5
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_LookoutTower_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_Concrete_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_Concrete_8x4_C",
			"name": "Inverted Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipe_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_ConcreteInCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_ConcreteInCorner_8x4_C",
			"name": "Inverted Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeInCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_ConcreteOutCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_ConcreteOutCorner_8x4_C",
			"name": "Inverted Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeOutCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Concrete_8x1_C": [
		{
			"className": "Recipe_Foundation_Concrete_8x1_C",
			"name": "Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Concrete_8x2_C": [
		{
			"className": "Recipe_Foundation_Concrete_8x2_C",
			"name": "Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Concrete_8x4_C": [
		{
			"className": "Recipe_Foundation_Concrete_8x4_C",
			"name": "Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Concrete_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_Concrete_8x1_C",
			"name": "Inverted Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Concrete_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_Concrete_8x2_C",
			"name": "Inverted Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Concrete_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_Concrete_8x4_C",
			"name": "Inverted Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Concrete_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Concrete_8x1_C",
			"name": "Inverted Down Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Concrete_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Concrete_8x2_C",
			"name": "Inverted Down Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Concrete_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Concrete_8x4_C",
			"name": "Inverted Down Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Concrete_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Concrete_8x1_C",
			"name": "Inverted Up Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Concrete_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Concrete_8x2_C",
			"name": "Inverted Up Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Concrete_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Concrete_8x4_C",
			"name": "Inverted Up Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipe_Concrete_8x4_C": [
		{
			"className": "Recipe_QuarterPipe_Concrete_8x4_C",
			"name": "Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipe_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeInCorner_Concrete_8x4_C": [
		{
			"className": "Recipe_QuarterPipeInCorner_Concrete_8x4_C",
			"name": "Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeInCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Concrete_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Concrete_8x1_C",
			"name": "Half Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Concrete_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Concrete_8x2_C",
			"name": "Half Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Concrete_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Concrete_8x4_C",
			"name": "Half Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Concrete_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Concrete_8x1_C",
			"name": "Inner Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Concrete_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Concrete_8x2_C",
			"name": "Inner Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Concrete_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Concrete_8x4_C",
			"name": "Inner Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Concrete_4x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Concrete_4x1_C",
			"name": "Outer Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Concrete_4x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Concrete_4x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Concrete_4x2_C",
			"name": "Outer Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Concrete_4x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Concrete_4x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Concrete_4x4_C",
			"name": "Outer Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Concrete_4x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeOutCorner_Concrete_8x4_C": [
		{
			"className": "Recipe_QuarterPipeOutCorner_Concrete_8x4_C",
			"name": "Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeOutCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Concrete_8x1_C": [
		{
			"className": "Recipe_Ramp_Concrete_8x1_C",
			"name": "Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Concrete_8x2_C": [
		{
			"className": "Recipe_Ramp_Concrete_8x2_C",
			"name": "Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Concrete_8x4_C": [
		{
			"className": "Recipe_Ramp_Concrete_8x4_C",
			"name": "Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Concrete_8x1_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Concrete_8x1_C",
			"name": "Down Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Concrete_8x2_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Concrete_8x2_C",
			"name": "Down Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Concrete_8x4_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Concrete_8x4_C",
			"name": "Down Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Concrete_8x1_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Concrete_8x1_C",
			"name": "Up Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Concrete_8x2_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Concrete_8x2_C",
			"name": "Up Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Concrete_8x4_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Concrete_8x4_C",
			"name": "Up Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Concrete_8x1_C": [
		{
			"className": "Recipe_RampDouble_Concrete_8x1_C",
			"name": "Double Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Concrete_8x2_C": [
		{
			"className": "Recipe_RampDouble_Concrete_8x2_C",
			"name": "Double Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Concrete_8x4_C": [
		{
			"className": "Recipe_RampDouble_Concrete_8x4_C",
			"name": "Double Ramp (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_Concrete_8x1_C": [
		{
			"className": "Recipe_Stair_Concrete_8x1_C",
			"name": "Foundation Stairs (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_Concrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_Concrete_8x2_C": [
		{
			"className": "Recipe_Stair_Concrete_8x2_C",
			"name": "Foundation Stairs (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_Concrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_Concrete_8x4_C": [
		{
			"className": "Recipe_Stair_Concrete_8x4_C",
			"name": "Foundation Stairs (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_Concrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_Grip_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_Grip_8x4_C",
			"name": "Inverted Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipe_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_GripInCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_GripInCorner_8x4_C",
			"name": "Inverted Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeInCorner_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_GripOutCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_GripOutCorner_8x4_C",
			"name": "Inverted Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeOutCorner_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Metal_8x1_C": [
		{
			"className": "Recipe_Foundation_Metal_8x1_C",
			"name": "Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Metal_8x2_C": [
		{
			"className": "Recipe_Foundation_Metal_8x2_C",
			"name": "Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Metal_8x4_C": [
		{
			"className": "Recipe_Foundation_Metal_8x4_C",
			"name": "Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Metal_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Metal_8x1_C",
			"name": "Inverted Down Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Metal_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Metal_8x2_C",
			"name": "Inverted Down Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Metal_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Metal_8x4_C",
			"name": "Inverted Down Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Metal_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_Metal_8x1_C",
			"name": "Inverted Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Metal_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_Metal_8x2_C",
			"name": "Inverted Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Metal_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_Metal_8x4_C",
			"name": "Inverted Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Metal_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Metal_8x1_C",
			"name": "Inverted Up Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Metal_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Metal_8x2_C",
			"name": "Inverted Up Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Metal_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Metal_8x4_C",
			"name": "Inverted Up Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipe_Grip_8x4_C": [
		{
			"className": "Recipe_QuarterPipe_Grip_8x4_C",
			"name": "Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipe_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeInCorner_Grip_8x4_C": [
		{
			"className": "Recipe_QuarterPipeInCorner_Grip_8x4_C",
			"name": "Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeInCorner_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Grip_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Grip_8x1_C",
			"name": "Half Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Grip_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Grip_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Grip_8x2_C",
			"name": "Half Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Grip_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Grip_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Grip_8x4_C",
			"name": "Half Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Grip_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Grip_8x1_C",
			"name": "Inner Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Grip_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Grip_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Grip_8x2_C",
			"name": "Inner Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Grip_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Grip_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Grip_8x4_C",
			"name": "Inner Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Grip_4x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Grip_4x1_C",
			"name": "Outer Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Grip_4x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Grip_4x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Grip_4x2_C",
			"name": "Outer Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Grip_4x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Grip_4x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Grip_4x4_C",
			"name": "Outer Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Grip_4x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeOutCorner_Grip_8x4_C": [
		{
			"className": "Recipe_QuarterPipeOutCorner_Grip_8x4_C",
			"name": "Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeOutCorner_Grip_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Metal_8x1_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Metal_8x1_C",
			"name": "Down Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Metal_8x2_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Metal_8x2_C",
			"name": "Down Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Metal_8x4_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Metal_8x4_C",
			"name": "Down Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Metal_8x1_C": [
		{
			"className": "Recipe_Ramp_Metal_8x1_C",
			"name": "Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Metal_8x2_C": [
		{
			"className": "Recipe_Ramp_Metal_8x2_C",
			"name": "Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Metal_8x4_C": [
		{
			"className": "Recipe_Ramp_Metal_8x4_C",
			"name": "Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Metal_8x1_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Metal_8x1_C",
			"name": "Up Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Metal_8x2_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Metal_8x2_C",
			"name": "Up Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Metal_8x4_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Metal_8x4_C",
			"name": "Up Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Metal_8x1_C": [
		{
			"className": "Recipe_RampDouble_Metal_8x1_C",
			"name": "Double Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Metal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Metal_8x2_C": [
		{
			"className": "Recipe_RampDouble_Metal_8x2_C",
			"name": "Double Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Metal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Metal_8x4_C": [
		{
			"className": "Recipe_RampDouble_Metal_8x4_C",
			"name": "Double Ramp (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Metal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_GripMetal_8x1_C": [
		{
			"className": "Recipe_Stair_GripMetal_8x1_C",
			"name": "Foundation Stairs (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_GripMetal_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_GripMetal_8x2_C": [
		{
			"className": "Recipe_Stair_GripMetal_8x2_C",
			"name": "Foundation Stairs (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_GripMetal_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_GripMetal_8x4_C": [
		{
			"className": "Recipe_Stair_GripMetal_8x4_C",
			"name": "Foundation Stairs (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_GripMetal_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_ConcretePolished_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_ConcretePolished_8x4_C",
			"name": "Inverted Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipe_ConcretePolished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_ConcretePolishedInCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_ConcretePolishedInCorner_8x4_C",
			"name": "Inverted Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeInCorner_ConcretePolished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_ConcretePolishedOutCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_ConcretePolishedOutCorner_8x4_C",
			"name": "Inverted Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeOutCorner_ConcretePolished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_ConcretePolished_8x1_C": [
		{
			"className": "Recipe_Foundation_ConcretePolished_8x1_C",
			"name": "Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_ConcretePolished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Polished_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Polished_8x1_C",
			"name": "Inverted Down Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Polished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Polished_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Polished_8x2_C",
			"name": "Inverted Down Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Polished_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Polished_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Polished_8x4_C",
			"name": "Inverted Down Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Polished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Polished_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_Polished_8x1_C",
			"name": "Inverted Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Polished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Polished_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_Polished_8x2_C",
			"name": "Inverted Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Polished_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Polished_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_Polished_8x4_C",
			"name": "Inverted Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Polished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Polished_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Polished_8x1_C",
			"name": "Inverted Up Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Polished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Polished_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Polished_8x2_C",
			"name": "Inverted Up Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Polished_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Polished_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Polished_8x4_C",
			"name": "Inverted Up Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Inverted Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Polished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipe_ConcretePolished_8x4_C": [
		{
			"className": "Recipe_QuarterPipe_ConcretePolished_8x4_C",
			"name": "Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipe_ConcretePolished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeInCorner_ConcretePolished_8x4_C": [
		{
			"className": "Recipe_QuarterPipeInCorner_ConcretePolished_8x4_C",
			"name": "Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeInCorner_ConcretePolished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_PolishedConcrete_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_PolishedConcrete_8x1_C",
			"name": "Half Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_PolishedConcrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_PolishedConcrete_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_PolishedConcrete_8x2_C",
			"name": "Half Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_PolishedConcrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_PolishedConcrete_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_PolishedConcrete_8x4_C",
			"name": "Half Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_PolishedConcrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C",
			"name": "Inner Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C",
			"name": "Inner Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C",
			"name": "Inner Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C",
			"name": "Outer Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C",
			"name": "Outer Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C",
			"name": "Outer Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeOutCorner_ConcretePolished_8x4_C": [
		{
			"className": "Recipe_QuarterPipeOutCorner_ConcretePolished_8x4_C",
			"name": "Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeOutCorner_ConcretePolished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Polished_8x1_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Polished_8x1_C",
			"name": "Down Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Polished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Polished_8x2_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Polished_8x2_C",
			"name": "Down Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Polished_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Polished_8x4_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Polished_8x4_C",
			"name": "Down Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Polished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Polished_8x1_C": [
		{
			"className": "Recipe_Ramp_Polished_8x1_C",
			"name": "Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Polished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Polished_8x2_C": [
		{
			"className": "Recipe_Ramp_Polished_8x2_C",
			"name": "Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Polished_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Polished_8x4_C": [
		{
			"className": "Recipe_Ramp_Polished_8x4_C",
			"name": "Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Polished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Polished_8x1_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Polished_8x1_C",
			"name": "Up Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Polished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Polished_8x2_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Polished_8x2_C",
			"name": "Up Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Polished_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Polished_8x4_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Polished_8x4_C",
			"name": "Up Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Corner Ramp Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Polished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Polished_8x1_C": [
		{
			"className": "Recipe_RampDouble_Polished_8x1_C",
			"name": "Double Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Polished_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Polished_8x2_C": [
		{
			"className": "Recipe_RampDouble_Polished_8x2_C",
			"name": "Double Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Polished_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Polished_8x4_C": [
		{
			"className": "Recipe_RampDouble_Polished_8x4_C",
			"name": "Double Ramp (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Double Ramp Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Polished_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_PolishedConcrete_8x1_C": [
		{
			"className": "Recipe_Stair_PolishedConcrete_8x1_C",
			"name": "Foundation Stairs (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_PolishedConcrete_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_PolishedConcrete_8x2_C": [
		{
			"className": "Recipe_Stair_PolishedConcrete_8x2_C",
			"name": "Foundation Stairs (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_PolishedConcrete_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_PolishedConcrete_8x4_C": [
		{
			"className": "Recipe_Stair_PolishedConcrete_8x4_C",
			"name": "Foundation Stairs (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_PolishedConcrete_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_Asphalt_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_Asphalt_8x4_C",
			"name": "Inverted Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipe_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_AsphaltInCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_AsphaltInCorner_8x4_C",
			"name": "Inverted Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeInCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_DownQuarterPipe_AsphaltOutCorner_8x4_C": [
		{
			"className": "Recipe_DownQuarterPipe_AsphaltOutCorner_8x4_C",
			"name": "Inverted Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_DownQuarterPipeOutCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Asphalt_8x1_C": [
		{
			"className": "Recipe_Foundation_Asphalt_8x1_C",
			"name": "Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Asphalt_8x2_C": [
		{
			"className": "Recipe_Foundation_Asphalt_8x2_C",
			"name": "Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Asphalt_8x4_C": [
		{
			"className": "Recipe_Foundation_Asphalt_8x4_C",
			"name": "Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Asphalt_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_Asphalt_8x1_C",
			"name": "Inverted Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Asphalt_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_Asphalt_8x2_C",
			"name": "Inverted Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_Asphalt_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_Asphalt_8x4_C",
			"name": "Inverted Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Asphalt_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Asphalt_8x1_C",
			"name": "Inverted Down Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Asphalt_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Asphalt_8x2_C",
			"name": "Inverted Down Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_DCorner_Asphalt_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_DCorner_Asphalt_8x4_C",
			"name": "Inverted Down Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_DCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Asphalt_8x1_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Asphalt_8x1_C",
			"name": "Inverted Up Corner (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Asphalt_8x2_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Asphalt_8x2_C",
			"name": "Inverted Up Corner (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_InvertedRamp_UCorner_Asphalt_8x4_C": [
		{
			"className": "Recipe_InvertedRamp_UCorner_Asphalt_8x4_C",
			"name": "Inverted Up Corner (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_InvertedRamp_UCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipe_Asphalt_8x4_C": [
		{
			"className": "Recipe_QuarterPipe_Asphalt_8x4_C",
			"name": "Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipe_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeInCorner_Asphalt_8x4_C": [
		{
			"className": "Recipe_QuarterPipeInCorner_Asphalt_8x4_C",
			"name": "Inner Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeInCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Asphalt_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Asphalt_8x1_C",
			"name": "Half Foundation (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Asphalt_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Asphalt_8x2_C",
			"name": "Half Foundation (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddle_Asphalt_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddle_Asphalt_8x4_C",
			"name": "Half Foundation (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddle_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Asphalt_8x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Asphalt_8x1_C",
			"name": "Inner Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Asphalt_8x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Asphalt_8x2_C",
			"name": "Inner Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleInCorner_Asphalt_8x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleInCorner_Asphalt_8x4_C",
			"name": "Inner Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleInCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x1_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x1_C",
			"name": "Outer Corner Extension (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Asphalt_4x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x2_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x2_C",
			"name": "Outer Corner Extension (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Asphalt_4x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x4_C": [
		{
			"className": "Recipe_QuarterPipeMiddleOutCorner_Asphalt_4x4_C",
			"name": "Outer Corner Extension (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeMiddleOutCorner_Asphalt_4x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_QuarterPipeOutCorner_Asphalt_8x4_C": [
		{
			"className": "Recipe_QuarterPipeOutCorner_Asphalt_8x4_C",
			"name": "Outer Corner Quarter Pipe",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_QuarterPipeOutCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Asphalt_8x1_C": [
		{
			"className": "Recipe_Ramp_Asphalt_8x1_C",
			"name": "Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Asphalt_8x2_C": [
		{
			"className": "Recipe_Ramp_Asphalt_8x2_C",
			"name": "Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Asphalt_8x4_C": [
		{
			"className": "Recipe_Ramp_Asphalt_8x4_C",
			"name": "Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Asphalt_8x1_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Asphalt_8x1_C",
			"name": "Down Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Asphalt_8x2_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Asphalt_8x2_C",
			"name": "Down Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_DownCorner_Asphalt_8x4_C": [
		{
			"className": "Recipe_Ramp_DownCorner_Asphalt_8x4_C",
			"name": "Down Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_DownCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Asphalt_8x1_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Asphalt_8x1_C",
			"name": "Up Corner Ramp (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Asphalt_8x2_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Asphalt_8x2_C",
			"name": "Up Corner Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_UpCorner_Asphalt_8x4_C": [
		{
			"className": "Recipe_Ramp_UpCorner_Asphalt_8x4_C",
			"name": "Up Corner Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_UpCorner_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Asphalt_8x1_C": [
		{
			"className": "Recipe_RampDouble_Asphalt_8x1_C",
			"name": "Double Ramp (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Asphalt_8x2_C": [
		{
			"className": "Recipe_RampDouble_Asphalt_8x2_C",
			"name": "Double Ramp (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RampDouble_Asphalt_8x4_C": [
		{
			"className": "Recipe_RampDouble_Asphalt_8x4_C",
			"name": "Double Ramp (8 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_RampDouble_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_Asphalt_8x1_C": [
		{
			"className": "Recipe_Stair_Asphalt_8x1_C",
			"name": "Foundation Stairs (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_Asphalt_8x1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_Asphalt_8x2_C": [
		{
			"className": "Recipe_Stair_Asphalt_8x2_C",
			"name": "Foundation Stairs (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_Asphalt_8x2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Stair_Asphalt_8x4_C": [
		{
			"className": "Recipe_Stair_Asphalt_8x4_C",
			"name": "Foundation Stairs (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Stair_Asphalt_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Protein_Stinger_C": [
		{
			"className": "Recipe_Protein_Stinger_C",
			"name": "Stinger Protein",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - Stinger Research",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_StingerParts_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Protein_Crab_C": [
		{
			"className": "Recipe_Protein_Crab_C",
			"name": "Hatcher Protein",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - Hatcher Research",
			"duration": 3,
			"ingredients": [
				{
					"item": "Desc_HatcherParts_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AlienDNACapsule_C": [
		{
			"className": "Recipe_AlienDNACapsule_C",
			"name": "Alien DNA Capsule",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - Bio-Organic Properties",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_AlienDNACapsule_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Biomass_AlienProtein_C": [
		{
			"className": "Recipe_Biomass_AlienProtein_C",
			"name": "Biomass (Alien Protein)",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - Bio-Organic Properties",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 100
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_MedicinalInhalerAlienOrgans_C": [
		{
			"className": "Recipe_MedicinalInhalerAlienOrgans_C",
			"name": "Protein Inhaler",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - Protein Inhaler",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				},
				{
					"item": "Desc_Nut_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_Medkit_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpikedRebar_C": [
		{
			"className": "Recipe_SpikedRebar_C",
			"name": "Iron Rebar",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - The Rebar Gun",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_SpikedRebar_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RebarGun_C": [
		{
			"className": "Recipe_RebarGun_C",
			"name": "Rebar Gun",
			"unlockedBy": "[[Alien Organisms Research|MAM Alien Organisms Research]] - The Rebar Gun",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 6
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 16
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_RebarGunProjectile_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_AlienPowerBuilding_C": [
		{
			"className": "Recipe_AlienPowerBuilding_C",
			"name": "Alien Power Augmenter",
			"unlockedBy": "[[Alien Technology Research|MAM Alien Technology Research]] - Power Augmenter",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_WAT1_C",
					"amount": 10
				},
				{
					"item": "Desc_SAMFluctuator_C",
					"amount": 50
				},
				{
					"item": "Desc_Cable_C",
					"amount": 100
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 50
				},
				{
					"item": "Desc_Motor_C",
					"amount": 25
				},
				{
					"item": "Desc_Computer_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_AlienPowerBuilding_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CentralStorage_C": [
		{
			"className": "Recipe_CentralStorage_C",
			"name": "Dimensional Depot Uploader",
			"unlockedBy": "[[Alien Technology Research|MAM Alien Technology Research]] - Dimensional Depot",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_WAT2_C",
					"amount": 1
				},
				{
					"item": "Desc_SAMFluctuator_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 10
				},
				{
					"item": "Desc_Wire_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_CentralStorage_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GeneratorGeoThermal_C": [
		{
			"className": "Recipe_GeneratorGeoThermal_C",
			"name": "Geothermal Generator",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Geothermal Generator",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 25
				},
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 25
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 50
				},
				{
					"item": "Desc_Wire_C",
					"amount": 250
				}
			],
			"products": [
				{
					"item": "Desc_GeneratorGeoThermal_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorAttachmentSplitterProgrammable_C": [
		{
			"className": "Recipe_ConveyorAttachmentSplitterProgrammable_C",
			"name": "Programmable Splitter",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Programmable Splitter",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 1
				},
				{
					"item": "Desc_Computer_C",
					"amount": 2
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorAttachmentSplitterProgrammable_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CartridgeSmart_C": [
		{
			"className": "Recipe_CartridgeSmart_C",
			"name": "Homing Rifle Ammo",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Bullet Guidance System",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_CartridgeStandard_C",
					"amount": 20
				},
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CartridgeSmartProjectile_C",
					"amount": 10
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.666667,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleMk3_C": [
		{
			"className": "Recipe_PowerPoleMk3_C",
			"name": "Power Pole Mk.3",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Power Poles Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 2
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleMk3_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PriorityPowerSwitch_C": [
		{
			"className": "Recipe_PriorityPowerSwitch_C",
			"name": "Priority Power Switch",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Priority Power Switch",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 6
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "Desc_PriorityPowerSwitch_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_BladeRunners_C": [
		{
			"className": "Recipe_BladeRunners_C",
			"name": "Blade Runners",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Blade Runners",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 20
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 3
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorJumpingStilts_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleMk2_C": [
		{
			"className": "Recipe_PowerPoleMk2_C",
			"name": "Power Pole Mk.2",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Power Poles Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 6
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerSwitch_C": [
		{
			"className": "Recipe_PowerSwitch_C",
			"name": "Power Switch",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Power Switch",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 20
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 4
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PowerSwitch_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConveyorAttachmentSplitterSmart_C": [
		{
			"className": "Recipe_ConveyorAttachmentSplitterSmart_C",
			"name": "Smart Splitter",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Smart Splitter",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 2
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_ConveyorAttachmentSplitterSmart_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Rebar_Stunshot_C": [
		{
			"className": "Recipe_Rebar_Stunshot_C",
			"name": "Stun Rebar",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Stun Rebar",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_SpikedRebar_C",
					"amount": 1
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Rebar_Stunshot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ZipLine_C": [
		{
			"className": "Recipe_ZipLine_C",
			"name": "Zipline",
			"unlockedBy": "[[Caterium Research|MAM Caterium Research]] - Zipline",
			"duration": 40,
			"ingredients": [
				{
					"item": "BP_EquipmentDescriptorShockShank_C",
					"amount": 1
				},
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 30
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 3
				},
				{
					"item": "Desc_Cable_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "BP_EqDescZipLine_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FilterGasMask_C": [
		{
			"className": "Recipe_FilterGasMask_C",
			"name": "Gas Filter",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Gas Mask",
			"duration": 8,
			"ingredients": [
				{
					"item": "Desc_Fabric_C",
					"amount": 2
				},
				{
					"item": "Desc_Coal_C",
					"amount": 4
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Filter_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Gasmask_C": [
		{
			"className": "Recipe_Gasmask_C",
			"name": "Gas Mask",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Gas Mask",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_Fabric_C",
					"amount": 50
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorGasmask_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NobeliskGas_C": [
		{
			"className": "Recipe_NobeliskGas_C",
			"name": "Gas Nobelisk",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Toxic Cellular Modification",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_NobeliskExplosive_C",
					"amount": 1
				},
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_NobeliskGas_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.666667,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TherapeuticInhaler_C": [
		{
			"className": "Recipe_TherapeuticInhaler_C",
			"name": "Therapeutic Inhaler",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Therapeutic Inhaler",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_Mycelia_C",
					"amount": 15
				},
				{
					"item": "Desc_AlienProtein_C",
					"amount": 1
				},
				{
					"item": "Desc_Shroom_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Medkit_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_MedicinalInhaler_C": [
		{
			"className": "Recipe_MedicinalInhaler_C",
			"name": "Vitamin Inhaler",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Vitamin Inhaler",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_Mycelia_C",
					"amount": 10
				},
				{
					"item": "Desc_Berry_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Medkit_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Parachute_C": [
		{
			"className": "Recipe_Parachute_C",
			"name": "Parachute",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Parachute",
			"duration": 40,
			"ingredients": [
				{
					"item": "Desc_Fabric_C",
					"amount": 20
				},
				{
					"item": "Desc_Cable_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_Parachute_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Alternate_PolyesterFabric_C": [
		{
			"className": "Recipe_Alternate_PolyesterFabric_C",
			"name": "Polyester Fabric",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Synthetic Polyester Fabric",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_PolymerResin_C",
					"amount": 1
				},
				{
					"item": "Desc_Water_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Fabric_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": true,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Fabric_C": [
		{
			"className": "Recipe_Fabric_C",
			"name": "Fabric",
			"unlockedBy": "[[Mycelia Research|MAM Mycelia Research]] - Fabric",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Mycelia_C",
					"amount": 1
				},
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Fabric_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NutritionalInhaler_C": [
		{
			"className": "Recipe_NutritionalInhaler_C",
			"name": "Nutritional Inhaler",
			"unlockedBy": "[[Nutrients Research|MAM Nutrients Research]] - Nutritional Inhaler",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_Shroom_C",
					"amount": 1
				},
				{
					"item": "Desc_Berry_C",
					"amount": 2
				},
				{
					"item": "Desc_Nut_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Medkit_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SyntheticPowerShard_C": [
		{
			"className": "Recipe_SyntheticPowerShard_C",
			"name": "Synthetic Power Shard",
			"unlockedBy": "[[Power Slugs Research|MAM Power Slugs Research]] - Synthetic Power Shards",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_TimeCrystal_C",
					"amount": 2
				},
				{
					"item": "Desc_DarkMatter_C",
					"amount": 2
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 12
				},
				{
					"item": "Desc_QuantumEnergy_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_CrystalShard_C",
					"amount": 1
				},
				{
					"item": "Desc_DarkEnergy_C",
					"amount": 12
				}
			],
			"producedIn": [
				"Desc_QuantumEncoder_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": 0,
			"maxPower": 2000,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerCrystalShard_3_C": [
		{
			"className": "Recipe_PowerCrystalShard_3_C",
			"name": "Power Shard (5)",
			"unlockedBy": "[[Power Slugs Research|MAM Power Slugs Research]] - Purple Power Slugs",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_Crystal_mk3_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CrystalShard_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerCrystalShard_2_C": [
		{
			"className": "Recipe_PowerCrystalShard_2_C",
			"name": "Power Shard (2)",
			"unlockedBy": "[[Power Slugs Research|MAM Power Slugs Research]] - Yellow Power Slugs",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_Crystal_mk2_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CrystalShard_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_RadarTower_C": [
		{
			"className": "Recipe_RadarTower_C",
			"name": "Radar Tower",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Radar Technology",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Computer_C",
					"amount": 10
				},
				{
					"item": "Desc_ModularFrameHeavy_C",
					"amount": 20
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 25
				},
				{
					"item": "Desc_Cable_C",
					"amount": 100
				}
			],
			"products": [
				{
					"item": "Desc_RadarTower_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NobeliskShockwave_C": [
		{
			"className": "Recipe_NobeliskShockwave_C",
			"name": "Pulse Nobelisk",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Explosive Resonance Application",
			"duration": 60,
			"ingredients": [
				{
					"item": "Desc_NobeliskExplosive_C",
					"amount": 5
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_NobeliskShockwave_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.666666,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Explorer_C": [
		{
			"className": "Recipe_Explorer_C",
			"name": "Explorer",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - The Explorer",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 5
				},
				{
					"item": "Desc_Motor_C",
					"amount": 5
				},
				{
					"item": "Desc_ModularFrame_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 15
				}
			],
			"products": [
				{
					"item": "Desc_Explorer_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Rebar_Spreadshot_C": [
		{
			"className": "Recipe_Rebar_Spreadshot_C",
			"name": "Shatter Rebar",
			"unlockedBy": "[[Quartz Research|MAM Quartz Research]] - Shatter Rebar",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_SpikedRebar_C",
					"amount": 2
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Rebar_Spreadshot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CartridgeChaos_Packaged_C": [
		{
			"className": "Recipe_CartridgeChaos_Packaged_C",
			"name": "Turbo Rifle Ammo",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Turbo Rifle Ammo",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_CartridgeStandard_C",
					"amount": 25
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 3
				},
				{
					"item": "Desc_TurboFuel_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_CartridgeChaos_C",
					"amount": 50
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 3.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CartridgeChaos_C": [
		{
			"className": "Recipe_CartridgeChaos_C",
			"name": "Turbo Rifle Ammo",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Turbo Rifle Ammo",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_CartridgeStandard_C",
					"amount": 25
				},
				{
					"item": "Desc_AluminumCasing_C",
					"amount": 3
				},
				{
					"item": "Desc_LiquidTurboFuel_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_CartridgeChaos_C",
					"amount": 50
				}
			],
			"producedIn": [
				"Desc_Blender_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 3.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NobeliskNuke_C": [
		{
			"className": "Recipe_NobeliskNuke_C",
			"name": "Nuke Nobelisk",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Nuclear Deterrent Development",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_NobeliskExplosive_C",
					"amount": 5
				},
				{
					"item": "Desc_UraniumCell_C",
					"amount": 20
				},
				{
					"item": "Desc_GunpowderMK2_C",
					"amount": 10
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_NobeliskNuke_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Cartridge_C": [
		{
			"className": "Recipe_Cartridge_C",
			"name": "Rifle Ammo",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - The Rifle",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 3
				},
				{
					"item": "Desc_GunpowderMK2_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_CartridgeStandard_C",
					"amount": 15
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Rebar_Explosive_C": [
		{
			"className": "Recipe_Rebar_Explosive_C",
			"name": "Explosive Rebar",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Explosive Rebar",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_SpikedRebar_C",
					"amount": 2
				},
				{
					"item": "Desc_GunpowderMK2_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Rebar_Explosive_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ManufacturerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceRifleMk1_C": [
		{
			"className": "Recipe_SpaceRifleMk1_C",
			"name": "Rifle",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - The Rifle",
			"duration": 120,
			"ingredients": [
				{
					"item": "Desc_Motor_C",
					"amount": 2
				},
				{
					"item": "Desc_Rubber_C",
					"amount": 10
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 25
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 250
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorRifle_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NobeliskCluster_C": [
		{
			"className": "Recipe_NobeliskCluster_C",
			"name": "Cluster Nobelisk",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Cluster Nobelisk",
			"duration": 24,
			"ingredients": [
				{
					"item": "Desc_NobeliskExplosive_C",
					"amount": 3
				},
				{
					"item": "Desc_GunpowderMK2_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_NobeliskCluster_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.666667,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Nobelisk_C": [
		{
			"className": "Recipe_Nobelisk_C",
			"name": "Nobelisk",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - The Nobelisk Detonator",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_Gunpowder_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_NobeliskExplosive_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1.333333,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_NobeliskDetonator_C": [
		{
			"className": "Recipe_NobeliskDetonator_C",
			"name": "Nobelisk Detonator",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - The Nobelisk Detonator",
			"duration": 80,
			"ingredients": [
				{
					"item": "BP_EquipmentDescriptorObjectScanner_C",
					"amount": 1
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 10
				},
				{
					"item": "Desc_Cable_C",
					"amount": 50
				}
			],
			"products": [
				{
					"item": "BP_EquipmentDescriptorNobeliskDetonator_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GunpowderMK2_C": [
		{
			"className": "Recipe_GunpowderMK2_C",
			"name": "Smokeless Powder",
			"unlockedBy": "[[Sulfur Research|MAM Sulfur Research]] - Smokeless Powder",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_Gunpowder_C",
					"amount": 2
				},
				{
					"item": "Desc_HeavyOilResidue_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_GunpowderMK2_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_OilRefinery_C"
			],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.5,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_WreathDecor_C": [
		{
			"className": "Recipe_WreathDecor_C",
			"name": "FICSMAS Wreath",
			"unlockedBy": "[[FICSMAS Holiday Event Research|MAM FICSMAS Holiday Event Research]] - FICSMAS Wreath",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_XmasWreath_C",
					"amount": 1
				},
				{
					"item": "Desc_XmasBow_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_WreathDecor_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [
				"ficsmas"
			],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SnowDispenser_C": [
		{
			"className": "Recipe_SnowDispenser_C",
			"name": "FICSMAS Snow Dispenser",
			"unlockedBy": "[[FICSMAS Holiday Event Research|MAM FICSMAS Holiday Event Research]] - It's Snowing!",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CandyCane_C",
					"amount": 10
				},
				{
					"item": "Desc_Snow_C",
					"amount": 100
				},
				{
					"item": "Desc_XmasWreath_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_SnowDispenser_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [
				"ficsmas"
			],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_xmassLights_C": [
		{
			"className": "Recipe_xmassLights_C",
			"name": "FICSMAS Power Light",
			"unlockedBy": "[[FICSMAS Holiday Event Research|MAM FICSMAS Holiday Event Research]] - FICSMAS Lights",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cable_C",
					"amount": 1
				},
				{
					"item": "Desc_XmasBallCluster_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_xmassLights_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [
				"ficsmas"
			],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TreeGiftProducer_C": [
		{
			"className": "Recipe_TreeGiftProducer_C",
			"name": "FICSMAS Gift Tree",
			"unlockedBy": "[[FICSMAS Holiday Event Research|MAM FICSMAS Holiday Event Research]] - FICSMAS Gift Tree",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Gift_C",
					"amount": 50
				},
				{
					"item": "Desc_XmasBranch_C",
					"amount": 100
				},
				{
					"item": "Desc_XmasBall3_C",
					"amount": 20
				},
				{
					"item": "Desc_XmasBall4_C",
					"amount": 20
				}
			],
			"products": [
				{
					"item": "Desc_TreeGiftProducer_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [
				"ficsmas"
			],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Snowman_C": [
		{
			"className": "Recipe_Snowman_C",
			"name": "Snowman",
			"unlockedBy": "[[FICSMAS Holiday Event Research|MAM FICSMAS Holiday Event Research]] - A Friend",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Snow_C",
					"amount": 50
				},
				{
					"item": "Desc_CandyCane_C",
					"amount": 3
				},
				{
					"item": "Desc_XmasBow_C",
					"amount": 1
				},
				{
					"item": "Desc_XmasBall1_C",
					"amount": 3
				},
				{
					"item": "Desc_XmasBall2_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Snowman_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [
				"ficsmas"
			],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_XMassTree_C": [
		{
			"className": "Recipe_XMassTree_C",
			"name": "Giant FICSMAS Tree",
			"unlockedBy": "[[FICSMAS Holiday Event Research|MAM FICSMAS Holiday Event Research]] - FICSMAS Tree Base",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_XmasBranch_C",
					"amount": 100
				},
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 50
				},
				{
					"item": "Desc_Cement_C",
					"amount": 500
				}
			],
			"products": [
				{
					"item": "Desc_XMassTree_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [
				"ficsmas"
			],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CandyCaneDecor_C": [
		{
			"className": "Recipe_CandyCaneDecor_C",
			"name": "Candy Cane",
			"unlockedBy": "[[FICSMAS Holiday Event Research|MAM FICSMAS Holiday Event Research]] - Candy Cane Decor",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CandyCane_C",
					"amount": 10
				},
				{
					"item": "Desc_XmasBow_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CandyCaneDecor_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [
				"ficsmas"
			],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Flat_Frame_01_C": [
		{
			"className": "Recipe_Flat_Frame_01_C",
			"name": "Frame Floor",
			"unlockedBy": "[[AWESOME Shop]] - Structural Frame Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Flat_Frame_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Foundation_Frame_01_C": [
		{
			"className": "Recipe_Foundation_Frame_01_C",
			"name": "Frame Foundation",
			"unlockedBy": "[[AWESOME Shop]] - Structural Frame Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Foundation_Frame_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FoundationGlass_01_C": [
		{
			"className": "Recipe_FoundationGlass_01_C",
			"name": "Glass Frame Foundation",
			"unlockedBy": "[[AWESOME Shop]] - Structural Frame Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_FoundationGlass_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Frame_01_C": [
		{
			"className": "Recipe_Ramp_Frame_01_C",
			"name": "Frame Ramp",
			"unlockedBy": "[[AWESOME Shop]] - Structural Frame Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Frame_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ramp_Frame_Inverted_01_C": [
		{
			"className": "Recipe_Ramp_Frame_Inverted_01_C",
			"name": "Inverted Frame Ramp",
			"unlockedBy": "[[AWESOME Shop]] - Structural Frame Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_Ramp_Frame_Inverted_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Frame_01_C": [
		{
			"className": "Recipe_Wall_Frame_01_C",
			"name": "Frame Wall",
			"unlockedBy": "[[AWESOME Shop]] - Structural Frame Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Frame_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Railing_01_C": [
		{
			"className": "Recipe_Railing_01_C",
			"name": "Modern Railing",
			"unlockedBy": "[[AWESOME Shop]] - Modern Railing",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Railing_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pillar_Small_Metal_C": [
		{
			"className": "Recipe_Pillar_Small_Metal_C",
			"name": "Small Metal Pillar",
			"unlockedBy": "[[AWESOME Shop]] - Metal Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Pillar_Small_Metal_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PillarBase_Small_C": [
		{
			"className": "Recipe_PillarBase_Small_C",
			"name": "Small Pillar Support",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Pillar Set OR\u003Cbr\u003E[[AWESOME Shop]] - Metal Pillar Set OR\u003Cbr\u003E[[AWESOME Shop]] - Frame Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_PillarBase_Small_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PillarBase_C": [
		{
			"className": "Recipe_PillarBase_C",
			"name": "Big Pillar Support",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Pillar Set OR\u003Cbr\u003E[[AWESOME Shop]] - Metal Pillar Set OR\u003Cbr\u003E[[AWESOME Shop]] - Frame Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_PillarBase_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PillarMiddle_C": [
		{
			"className": "Recipe_PillarMiddle_C",
			"name": "Big Metal Pillar",
			"unlockedBy": "[[AWESOME Shop]] - Metal Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_PillarMiddle_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Ladder_C": [
		{
			"className": "Recipe_Ladder_C",
			"name": "Ladder",
			"unlockedBy": "[[AWESOME Shop]] - Factory Ladder",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Ladder_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FactoryCart_C": [
		{
			"className": "Recipe_FactoryCart_C",
			"name": "Factory Cart™",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Factory Cart™",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 4
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 4
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_GolfCart_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CyberWagon_C": [
		{
			"className": "Recipe_CyberWagon_C",
			"name": "Cyber Wagon",
			"unlockedBy": "[[AWESOME Shop]] - Cyber Wagon",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_CyberWagon_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Gate_Automated_8x4_C": [
		{
			"className": "Recipe_Gate_Automated_8x4_C",
			"name": "Automated Gate",
			"unlockedBy": "[[AWESOME Shop]] - Gates",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_Gate_Automated_8x4_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_HyperTubeWallHole_C": [
		{
			"className": "Recipe_HyperTubeWallHole_C",
			"name": "Hypertube Wall Hole",
			"unlockedBy": "[[AWESOME Shop]] - Hypertube Wall Attachments",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_HyperTubeWallHole_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipeSupportWallHole_C": [
		{
			"className": "Recipe_PipeSupportWallHole_C",
			"name": "Pipeline Wall Hole",
			"unlockedBy": "[[AWESOME Shop]] - Pipeline Wall Attachments",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PipelineSupportWallHole_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FoundationPassthrough_Pipe_C": [
		{
			"className": "Recipe_FoundationPassthrough_Pipe_C",
			"name": "Pipeline Floor Hole",
			"unlockedBy": "[[AWESOME Shop]] - Pipeline Floor Hole",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_FoundationPassthrough_Pipe_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleWallDouble_C": [
		{
			"className": "Recipe_PowerPoleWallDouble_C",
			"name": "Double Wall Outlet Mk.1",
			"unlockedBy": "[[AWESOME Shop]] - Wall Power Outlets Mk.1",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Wire_C",
					"amount": 8
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleWallDouble_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleWallDoubleMk2_C": [
		{
			"className": "Recipe_PowerPoleWallDoubleMk2_C",
			"name": "Double Wall Outlet Mk.2",
			"unlockedBy": "[[AWESOME Shop]] - Wall Power Outlets Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 16
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleWallDoubleMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleWallMk2_C": [
		{
			"className": "Recipe_PowerPoleWallMk2_C",
			"name": "Wall Outlet Mk.2",
			"unlockedBy": "[[AWESOME Shop]] - Wall Power Outlets Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 8
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleWallMk2_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleWallDoubleMk3_C": [
		{
			"className": "Recipe_PowerPoleWallDoubleMk3_C",
			"name": "Double Wall Outlet Mk.3",
			"unlockedBy": "[[AWESOME Shop]] - Wall Power Outlets Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 6
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleWallDoubleMk3_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PowerPoleWallMk3_C": [
		{
			"className": "Recipe_PowerPoleWallMk3_C",
			"name": "Wall Outlet Mk.3",
			"unlockedBy": "[[AWESOME Shop]] - Wall Power Outlets Mk.3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedConnector_C",
					"amount": 3
				},
				{
					"item": "Desc_SteelPipe_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_PowerPoleWallMk3_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StreetLight_C": [
		{
			"className": "Recipe_StreetLight_C",
			"name": "Street Light",
			"unlockedBy": "[[AWESOME Shop]] - Street Light",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 10
				},
				{
					"item": "Desc_Wire_C",
					"amount": 4
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_StreetLight_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_CeilingLight_C": [
		{
			"className": "Recipe_CeilingLight_C",
			"name": "Ceiling Light",
			"unlockedBy": "[[AWESOME Shop]] - Indoor Lighting",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 50
				},
				{
					"item": "Desc_Wire_C",
					"amount": 16
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_CeilingLight_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FloodlightPole_C": [
		{
			"className": "Recipe_FloodlightPole_C",
			"name": "Flood Light Tower",
			"unlockedBy": "[[AWESOME Shop]] - Flood Lights",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 25
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 4
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_FloodlightPole_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FloodlightWall_C": [
		{
			"className": "Recipe_FloodlightWall_C",
			"name": "Wall-Mounted Flood Light",
			"unlockedBy": "[[AWESOME Shop]] - Flood Lights",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_HighSpeedWire_C",
					"amount": 25
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 4
				},
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_FloodlightWall_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_01_C": [
		{
			"className": "Recipe_Roof_Orange_01_C",
			"name": "Flat Roof",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roofs",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_02_C": [
		{
			"className": "Recipe_Roof_Orange_02_C",
			"name": "Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roofs",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_03_C": [
		{
			"className": "Recipe_Roof_Orange_03_C",
			"name": "Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roofs",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_04_C": [
		{
			"className": "Recipe_Roof_Orange_04_C",
			"name": "Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roofs",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_InCorner_01_C": [
		{
			"className": "Recipe_Roof_Orange_InCorner_01_C",
			"name": "Inner Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_InCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_InCorner_02_C": [
		{
			"className": "Recipe_Roof_Orange_InCorner_02_C",
			"name": "Inner Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_InCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_InCorner_03_C": [
		{
			"className": "Recipe_Roof_Orange_InCorner_03_C",
			"name": "Inner Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_InCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_OutCorner_01_C": [
		{
			"className": "Recipe_Roof_Orange_OutCorner_01_C",
			"name": "Outer Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_OutCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_OutCorner_02_C": [
		{
			"className": "Recipe_Roof_Orange_OutCorner_02_C",
			"name": "Outer Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_OutCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Orange_OutCorner_03_C": [
		{
			"className": "Recipe_Roof_Orange_OutCorner_03_C",
			"name": "Outer Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Orange_OutCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_01_C": [
		{
			"className": "Recipe_Roof_Window_01_C",
			"name": "Flat Roof",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_02_C": [
		{
			"className": "Recipe_Roof_Window_02_C",
			"name": "Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_03_C": [
		{
			"className": "Recipe_Roof_Window_03_C",
			"name": "Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_04_C": [
		{
			"className": "Recipe_Roof_Window_04_C",
			"name": "Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_InCorner_01_C": [
		{
			"className": "Recipe_Roof_Window_InCorner_01_C",
			"name": "Inner Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_InCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_InCorner_02_C": [
		{
			"className": "Recipe_Roof_Window_InCorner_02_C",
			"name": "Inner Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_InCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_InCorner_03_C": [
		{
			"className": "Recipe_Roof_Window_InCorner_03_C",
			"name": "Inner Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_InCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_OutCorner_01_C": [
		{
			"className": "Recipe_Roof_Window_OutCorner_01_C",
			"name": "Outer Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_OutCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_OutCorner_02_C": [
		{
			"className": "Recipe_Roof_Window_OutCorner_02_C",
			"name": "Outer Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_OutCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Window_OutCorner_03_C": [
		{
			"className": "Recipe_Roof_Window_OutCorner_03_C",
			"name": "Outer Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Window_OutCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_A_01_C": [
		{
			"className": "Recipe_Roof_A_01_C",
			"name": "Flat Roof",
			"unlockedBy": "[[AWESOME Shop]] - Metal Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_A_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_A_02_C": [
		{
			"className": "Recipe_Roof_A_02_C",
			"name": "Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Metal Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_A_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_A_03_C": [
		{
			"className": "Recipe_Roof_A_03_C",
			"name": "Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Metal Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_A_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_A_04_C": [
		{
			"className": "Recipe_Roof_A_04_C",
			"name": "Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Metal Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_A_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Metal_InCorner_01_C": [
		{
			"className": "Recipe_Roof_Metal_InCorner_01_C",
			"name": "Inner Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Metal_InCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Metal_InCorner_02_C": [
		{
			"className": "Recipe_Roof_Metal_InCorner_02_C",
			"name": "Inner Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Metal_InCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Metal_InCorner_03_C": [
		{
			"className": "Recipe_Roof_Metal_InCorner_03_C",
			"name": "Inner Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Metal_InCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Metal_OutCorner_01_C": [
		{
			"className": "Recipe_Roof_Metal_OutCorner_01_C",
			"name": "Outer Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Metal_OutCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Metal_OutCorner_02_C": [
		{
			"className": "Recipe_Roof_Metal_OutCorner_02_C",
			"name": "Outer Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Metal_OutCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Metal_OutCorner_03_C": [
		{
			"className": "Recipe_Roof_Metal_OutCorner_03_C",
			"name": "Outer Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Metal_OutCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_01_C": [
		{
			"className": "Recipe_Roof_Tar_01_C",
			"name": "Flat Roof",
			"unlockedBy": "[[AWESOME Shop]] - Tar Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_02_C": [
		{
			"className": "Recipe_Roof_Tar_02_C",
			"name": "Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tar Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_03_C": [
		{
			"className": "Recipe_Roof_Tar_03_C",
			"name": "Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tar Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_04_C": [
		{
			"className": "Recipe_Roof_Tar_04_C",
			"name": "Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Tar Roof Material",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_04_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_InCorner_01_C": [
		{
			"className": "Recipe_Roof_Tar_InCorner_01_C",
			"name": "Inner Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_InCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_InCorner_02_C": [
		{
			"className": "Recipe_Roof_Tar_InCorner_02_C",
			"name": "Inner Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_InCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_InCorner_03_C": [
		{
			"className": "Recipe_Roof_Tar_InCorner_03_C",
			"name": "Inner Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_InCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_OutCorner_01_C": [
		{
			"className": "Recipe_Roof_Tar_OutCorner_01_C",
			"name": "Outer Corner Roof (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_OutCorner_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_OutCorner_02_C": [
		{
			"className": "Recipe_Roof_Tar_OutCorner_02_C",
			"name": "Outer Corner Roof (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_OutCorner_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Roof_Tar_OutCorner_03_C": [
		{
			"className": "Recipe_Roof_Tar_OutCorner_03_C",
			"name": "Outer Corner Roof (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - FICSIT Roof Corners",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Roof_Tar_OutCorner_03_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PipelineMK2_NoIndicator_C": [
		{
			"className": "Recipe_PipelineMK2_NoIndicator_C",
			"name": "Clean Pipeline Mk.2",
			"unlockedBy": "[[AWESOME Shop]] - Clean Pipeline Mk.2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 2
				},
				{
					"item": "Desc_Plastic_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_PipelineMK2_NoIndicator_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pipeline_NoIndicator_C": [
		{
			"className": "Recipe_Pipeline_NoIndicator_C",
			"name": "Clean Pipeline Mk.1",
			"unlockedBy": "[[AWESOME Shop]] - Clean Pipeline Mk.1",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_CopperSheet_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Pipeline_NoIndicator_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StorageMedkit_C": [
		{
			"className": "Recipe_StorageMedkit_C",
			"name": "Medical Storage Box",
			"unlockedBy": "[[AWESOME Shop]] - Medical Box - Personal Storage Skin",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 6
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_StorageMedkit_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_LightsControlPanel_C": [
		{
			"className": "Recipe_LightsControlPanel_C",
			"name": "Light Control Panel",
			"unlockedBy": "[[AWESOME Shop]] - Light Control Panel",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cable_C",
					"amount": 10
				},
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 5
				},
				{
					"item": "Desc_CircuitBoardHighSpeed_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_LightsControlPanel_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Small_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Small_C",
			"name": "Label Sign (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Label Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Small_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_SmallVeryWide_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_SmallVeryWide_C",
			"name": "Label Sign (4 m)",
			"unlockedBy": "[[AWESOME Shop]] - Label Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 4
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_SmallVeryWide_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_SmallWide_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_SmallWide_C",
			"name": "Label Sign (3 m)",
			"unlockedBy": "[[AWESOME Shop]] - Label Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 3
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_SmallWide_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Square_Tiny_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Square_Tiny_C",
			"name": "Square Sign (0.5 m)",
			"unlockedBy": "[[AWESOME Shop]] - Label Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Square_Tiny_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FoundationPassthrough_Hypertube_C": [
		{
			"className": "Recipe_FoundationPassthrough_Hypertube_C",
			"name": "Hypertube Floor Hole",
			"unlockedBy": "[[AWESOME Shop]] - Hypertube Floor Hole",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_FoundationPassthrough_Hypertube_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StorageHazard_C": [
		{
			"className": "Recipe_StorageHazard_C",
			"name": "Hazard Storage Box",
			"unlockedBy": "[[AWESOME Shop]] - Hazard Box - Personal Storage Skin",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 6
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 6
				}
			],
			"products": [
				{
					"item": "Desc_StorageHazard_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GoldenCart_C": [
		{
			"className": "Recipe_GoldenCart_C",
			"name": "Golden Factory Cart™",
			"unlockedBy": "[[AWESOME Shop]] - Golden FICSIT Factory Cart™",
			"duration": 20,
			"ingredients": [
				{
					"item": "Desc_GoldIngot_C",
					"amount": 15
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 4
				},
				{
					"item": "Desc_Rotor_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_GolfCartGold_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 2,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_8x4_05_C": [
		{
			"className": "Recipe_Wall_Window_8x4_05_C",
			"name": "Angled Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel-Framed Windows",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_8x4_05_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_8x4_06_C": [
		{
			"className": "Recipe_Wall_Window_8x4_06_C",
			"name": "Honeycomb Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel-Framed Windows",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_8x4_06_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_8x4_07_C": [
		{
			"className": "Recipe_Wall_Window_8x4_07_C",
			"name": "Triple Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel-Framed Windows",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_8x4_07_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_Thin_8x4_01_C": [
		{
			"className": "Recipe_Wall_Window_Thin_8x4_01_C",
			"name": "Full Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel-Framed Windows",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_Thin_8x4_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wall_Window_Thin_8x4_02_C": [
		{
			"className": "Recipe_Wall_Window_Thin_8x4_02_C",
			"name": "Hex Frame Window",
			"unlockedBy": "[[AWESOME Shop]] - Steel-Framed Windows",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				},
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Wall_Window_Thin_8x4_02_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pillar_Small_Frame_C": [
		{
			"className": "Recipe_Pillar_Small_Frame_C",
			"name": "Small Frame Pillar",
			"unlockedBy": "[[AWESOME Shop]] - Frame Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Pillar_Small_Frame_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PillarMiddle_Frame_C": [
		{
			"className": "Recipe_PillarMiddle_Frame_C",
			"name": "Big Frame Pillar",
			"unlockedBy": "[[AWESOME Shop]] - Frame Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_PillarMiddle_Frame_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ChainLinkFence_C": [
		{
			"className": "Recipe_ChainLinkFence_C",
			"name": "Construction Fence",
			"unlockedBy": "[[AWESOME Shop]] - Construction Fences",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_ChainLinkFence_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_TarpFence_C": [
		{
			"className": "Recipe_TarpFence_C",
			"name": "Tarp Construction Fence",
			"unlockedBy": "[[AWESOME Shop]] - Construction Fences",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_TarpFence_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Barrier_Low_01_C": [
		{
			"className": "Recipe_Barrier_Low_01_C",
			"name": "Low Barrier",
			"unlockedBy": "[[AWESOME Shop]] - Metal Barriers",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 1
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Barrier_Low_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Barrier_Tall_01_C": [
		{
			"className": "Recipe_Barrier_Tall_01_C",
			"name": "High Barrier",
			"unlockedBy": "[[AWESOME Shop]] - Metal Barriers",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 1
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Barrier_Tall_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Concrete_Barrier_01_C": [
		{
			"className": "Recipe_Concrete_Barrier_01_C",
			"name": "Road Barrier",
			"unlockedBy": "[[AWESOME Shop]] - Road Barrier",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Concrete_Barrier_01_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Medium_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Medium_C",
			"name": "Display Sign",
			"unlockedBy": "[[AWESOME Shop]] - Display Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 2
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Medium_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Portrait_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Portrait_C",
			"name": "Portrait Sign",
			"unlockedBy": "[[AWESOME Shop]] - Display Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 4
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Portrait_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Square_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Square_C",
			"name": "Square Sign (2 m)",
			"unlockedBy": "[[AWESOME Shop]] - Display Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 3
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Square_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Square_Small_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Square_Small_C",
			"name": "Square Sign (1 m)",
			"unlockedBy": "[[AWESOME Shop]] - Display Sign Bundle",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 1
				},
				{
					"item": "Desc_QuartzCrystal_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Square_Small_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_FoundationPassthrough_Lift_C": [
		{
			"className": "Recipe_FoundationPassthrough_Lift_C",
			"name": "Conveyor Lift Floor Hole",
			"unlockedBy": "[[AWESOME Shop]] - Conveyor Lift Floor Hole",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_FoundationPassthrough_Lift_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pillar_Small_Concrete_C": [
		{
			"className": "Recipe_Pillar_Small_Concrete_C",
			"name": "Small Concrete Pillar",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Pillar_Small_Concrete_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PillarMiddle_Concrete_C": [
		{
			"className": "Recipe_PillarMiddle_Concrete_C",
			"name": "Big Concrete Pillar",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Pillar Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_PillarMiddle_Concrete_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Catwalk_Cross_C": [
		{
			"className": "Recipe_Catwalk_Cross_C",
			"name": "Catwalk Intersection",
			"unlockedBy": "[[AWESOME Shop]] - Modern Catwalks",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CatwalkCross_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Catwalk_Ramp_C": [
		{
			"className": "Recipe_Catwalk_Ramp_C",
			"name": "Catwalk Ramp",
			"unlockedBy": "[[AWESOME Shop]] - Modern Catwalks",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CatwalkRamp_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Catwalk_Stairs_C": [
		{
			"className": "Recipe_Catwalk_Stairs_C",
			"name": "Catwalk Stairs",
			"unlockedBy": "[[AWESOME Shop]] - Modern Catwalks",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CatwalkStairs_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Catwalk_Straight_C": [
		{
			"className": "Recipe_Catwalk_Straight_C",
			"name": "Straight Catwalk",
			"unlockedBy": "[[AWESOME Shop]] - Modern Catwalks",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CatwalkStraight_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Catwalk_T_C": [
		{
			"className": "Recipe_Catwalk_T_C",
			"name": "Catwalk T-Junction",
			"unlockedBy": "[[AWESOME Shop]] - Modern Catwalks",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CatwalkT_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Catwalk_Turn_C": [
		{
			"className": "Recipe_Catwalk_Turn_C",
			"name": "Catwalk Corner",
			"unlockedBy": "[[AWESOME Shop]] - Modern Catwalks",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 2
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CatwalkTurn_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Huge_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Huge_C",
			"name": "Large Billboard",
			"unlockedBy": "[[AWESOME Shop]] - Billboard Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 12
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 20
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 5
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Huge_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StandaloneWidgetSign_Large_C": [
		{
			"className": "Recipe_StandaloneWidgetSign_Large_C",
			"name": "Small Billboard",
			"unlockedBy": "[[AWESOME Shop]] - Billboard Set",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlateReinforced_C",
					"amount": 3
				},
				{
					"item": "Desc_CopperSheet_C",
					"amount": 4
				},
				{
					"item": "Desc_CrystalOscillator_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_StandaloneWidgetSign_Large_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Beam_C": [
		{
			"className": "Recipe_Beam_C",
			"name": "Metal Beam",
			"unlockedBy": "[[AWESOME Shop]] - Structural Beam Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Beam_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Beam_Connector_C": [
		{
			"className": "Recipe_Beam_Connector_C",
			"name": "Beam Connector",
			"unlockedBy": "[[AWESOME Shop]] - Structural Beam Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Beam_Connector_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Beam_Connector_Double_C": [
		{
			"className": "Recipe_Beam_Connector_Double_C",
			"name": "Double Beam Connector",
			"unlockedBy": "[[AWESOME Shop]] - Structural Beam Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Beam_Connector_Double_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Beam_Painted_C": [
		{
			"className": "Recipe_Beam_Painted_C",
			"name": "Painted Beam",
			"unlockedBy": "[[AWESOME Shop]] - Structural Beam Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Beam_Painted_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Beam_Support_C": [
		{
			"className": "Recipe_Beam_Support_C",
			"name": "Beam Support",
			"unlockedBy": "[[AWESOME Shop]] - Structural Beam Pack",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Beam_Support_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_GeneratorBiomass_Automated_C": [
		{
			"className": "Recipe_GeneratorBiomass_Automated_C",
			"name": "Biomass Burner",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 6",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 15
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 15
				},
				{
					"item": "Desc_Wire_C",
					"amount": 25
				}
			],
			"products": [
				{
					"item": "Desc_GeneratorBiomass_Automated_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SpaceElevator_C": [
		{
			"className": "Recipe_SpaceElevator_C",
			"name": "Space Elevator",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 6",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 500
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 250
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 400
				},
				{
					"item": "Desc_Wire_C",
					"amount": 1500
				}
			],
			"products": [
				{
					"item": "Desc_SpaceElevator_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Biomass_Leaves_C": [
		{
			"className": "Recipe_Biomass_Leaves_C",
			"name": "Biomass (Leaves)",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 6",
			"duration": 5,
			"ingredients": [
				{
					"item": "Desc_Leaves_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 5
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 0.4,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Biomass_Wood_C": [
		{
			"className": "Recipe_Biomass_Wood_C",
			"name": "Biomass (Wood)",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 6",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Wood_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_GenericBiomass_C",
					"amount": 20
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_MinerMk1_C": [
		{
			"className": "Recipe_MinerMk1_C",
			"name": "Miner Mk.1",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 5",
			"duration": 1,
			"ingredients": [
				{
					"item": "BP_ItemDescriptorPortableMiner_C",
					"amount": 1
				},
				{
					"item": "Desc_IronPlate_C",
					"amount": 10
				},
				{
					"item": "Desc_Cement_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_MinerMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_StorageContainerMk1_C": [
		{
			"className": "Recipe_StorageContainerMk1_C",
			"name": "Storage Container",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 5",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 10
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 10
				}
			],
			"products": [
				{
					"item": "Desc_StorageContainerMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IronPlateReinforced_C": [
		{
			"className": "Recipe_IronPlateReinforced_C",
			"name": "Reinforced Iron Plate",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 3",
			"duration": 12,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 6
				},
				{
					"item": "Desc_IronScrew_C",
					"amount": 12
				}
			],
			"products": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_AssemblerMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_ConstructorMk1_C": [
		{
			"className": "Recipe_ConstructorMk1_C",
			"name": "Constructor",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 3",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlateReinforced_C",
					"amount": 2
				},
				{
					"item": "Desc_Cable_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_ConstructorMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Concrete_C": [
		{
			"className": "Recipe_Concrete_C",
			"name": "Concrete",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 3",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_Stone_C",
					"amount": 3
				}
			],
			"products": [
				{
					"item": "Desc_Cement_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Screw_C": [
		{
			"className": "Recipe_Screw_C",
			"name": "Screw",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 3",
			"duration": 6,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_IronScrew_C",
					"amount": 4
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SmelterBasicMk1_C": [
		{
			"className": "Recipe_SmelterBasicMk1_C",
			"name": "Smelter",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 2",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronRod_C",
					"amount": 5
				},
				{
					"item": "Desc_Wire_C",
					"amount": 8
				}
			],
			"products": [
				{
					"item": "Desc_SmelterMk1_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Cable_C": [
		{
			"className": "Recipe_Cable_C",
			"name": "Cable",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 2",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_Wire_C",
					"amount": 2
				}
			],
			"products": [
				{
					"item": "Desc_Cable_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Wire_C": [
		{
			"className": "Recipe_Wire_C",
			"name": "Wire",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 2",
			"duration": 4,
			"ingredients": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_Wire_C",
					"amount": 2
				}
			],
			"producedIn": [
				"Desc_ConstructorMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_IngotCopper_C": [
		{
			"className": "Recipe_IngotCopper_C",
			"name": "Copper Ingot",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 2",
			"duration": 2,
			"ingredients": [
				{
					"item": "Desc_OreCopper_C",
					"amount": 1
				}
			],
			"products": [
				{
					"item": "Desc_CopperIngot_C",
					"amount": 1
				}
			],
			"producedIn": [
				"Desc_SmelterMk1_C"
			],
			"inCraftBench": true,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 3,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Workshop_C": [
		{
			"className": "Recipe_Workshop_C",
			"name": "Equipment Workshop",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 1",
			"duration": 1,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 6
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "Desc_Workshop_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": true,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PortableMiner_C": [
		{
			"className": "Recipe_PortableMiner_C",
			"name": "Portable Miner",
			"unlockedBy": "[[Tier 0]] - HUB Upgrade 1",
			"duration": 40,
			"ingredients": [
				{
					"item": "Desc_IronPlate_C",
					"amount": 2
				},
				{
					"item": "Desc_IronRod_C",
					"amount": 4
				}
			],
			"products": [
				{
					"item": "BP_ItemDescriptorPortableMiner_C",
					"amount": 1
				}
			],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": true,
			"inBuildGun": false,
			"inCustomizer": false,
			"manualCraftingMultiplier": 1,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Wall_Concrete_C": [
		{
			"className": "Recipe_Material_Wall_Concrete_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Wall_Steel_C": [
		{
			"className": "Recipe_Material_Wall_Steel_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Steel Wall Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Remover_Arrows_C": [
		{
			"className": "Recipe_Pattern_Remover_Arrows_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Remover_Icons_C": [
		{
			"className": "Recipe_Pattern_Remover_Icons_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns OR\u003Cbr\u003E[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Remover_Lines_C": [
		{
			"className": "Recipe_Pattern_Remover_Lines_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns OR\u003Cbr\u003E[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Remover_Numbers_C": [
		{
			"className": "Recipe_Pattern_Remover_Numbers_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Remover_Paths_C": [
		{
			"className": "Recipe_Pattern_Remover_Paths_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Remover_C": [
		{
			"className": "Recipe_Pattern_Remover_C",
			"name": "N/A",
			"unlockedBy": "Pattern Removal",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Remover_Zones_C": [
		{
			"className": "Recipe_Pattern_Remover_Zones_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Zone Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot17_C": [
		{
			"className": "Recipe_Swatch_Slot17_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Custom_C": [
		{
			"className": "Recipe_Swatch_Custom_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_ProjectAssembly_C": [
		{
			"className": "Recipe_Swatch_ProjectAssembly_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot0_C": [
		{
			"className": "Recipe_Swatch_Slot0_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot1_C": [
		{
			"className": "Recipe_Swatch_Slot1_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot10_C": [
		{
			"className": "Recipe_Swatch_Slot10_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot11_C": [
		{
			"className": "Recipe_Swatch_Slot11_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot12_C": [
		{
			"className": "Recipe_Swatch_Slot12_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot13_C": [
		{
			"className": "Recipe_Swatch_Slot13_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot14_C": [
		{
			"className": "Recipe_Swatch_Slot14_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot15_C": [
		{
			"className": "Recipe_Swatch_Slot15_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot16_C": [
		{
			"className": "Recipe_Swatch_Slot16_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot18_C": [
		{
			"className": "Recipe_Swatch_Slot18_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot19_C": [
		{
			"className": "Recipe_Swatch_Slot19_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot2_C": [
		{
			"className": "Recipe_Swatch_Slot2_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot20_C": [
		{
			"className": "Recipe_Swatch_Slot20_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot3_C": [
		{
			"className": "Recipe_Swatch_Slot3_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot4_C": [
		{
			"className": "Recipe_Swatch_Slot4_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot5_C": [
		{
			"className": "Recipe_Swatch_Slot5_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot6_C": [
		{
			"className": "Recipe_Swatch_Slot6_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot7_C": [
		{
			"className": "Recipe_Swatch_Slot7_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot8_C": [
		{
			"className": "Recipe_Swatch_Slot8_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Slot9_C": [
		{
			"className": "Recipe_Swatch_Slot9_C",
			"name": "N/A",
			"unlockedBy": "[[Tier 2]] - Resource Sink Bonus Program",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Foundation_Concrete_C": [
		{
			"className": "Recipe_Material_Foundation_Concrete_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Foundation Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Foundation_GripMetal_C": [
		{
			"className": "Recipe_Material_Foundation_GripMetal_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Grip Metal Foundation Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Foundation_PolishedConcrete_C": [
		{
			"className": "Recipe_Material_Foundation_PolishedConcrete_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Coated Concrete Foundation Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_Plastic_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Foundation_Asphalt_C": [
		{
			"className": "Recipe_Material_Foundation_Asphalt_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Asphalt Foundation Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Swatch_Concrete_C": [
		{
			"className": "Recipe_Swatch_Concrete_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Concrete Wall Material",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Roof_Glass_C": [
		{
			"className": "Recipe_Material_Roof_Glass_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Glass Roof Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_Silica_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Roof_Metal_C": [
		{
			"className": "Recipe_Material_Roof_Metal_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Metal Roof Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_SteelPlate_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Material_Roof_Tar_C": [
		{
			"className": "Recipe_Material_Roof_Tar_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Tar Roof Material",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_Cement_C",
					"amount": 2
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ZoneFull_C": [
		{
			"className": "Recipe_Pattern_ZoneFull_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Zone Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ZoneHalf_C": [
		{
			"className": "Recipe_Pattern_ZoneHalf_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Zone Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ZoneLine_C": [
		{
			"className": "Recipe_Pattern_ZoneLine_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Zone Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ZoneQuarter_C": [
		{
			"className": "Recipe_Pattern_ZoneQuarter_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Zone Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PaintFinish_UnPainted_C": [
		{
			"className": "Recipe_PaintFinish_UnPainted_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Unpainted Finish",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_PathCart_C": [
		{
			"className": "Recipe_Pattern_PathCart_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_PathCorner_C": [
		{
			"className": "Recipe_Pattern_PathCorner_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_PathCross_C": [
		{
			"className": "Recipe_Pattern_PathCross_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_PathPioneer_C": [
		{
			"className": "Recipe_Pattern_PathPioneer_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_PathSplit_C": [
		{
			"className": "Recipe_Pattern_PathSplit_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_PathStraight_C": [
		{
			"className": "Recipe_Pattern_PathStraight_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_PathZebra_C": [
		{
			"className": "Recipe_Pattern_PathZebra_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Pathway Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number0_C": [
		{
			"className": "Recipe_Pattern_Number0_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number1_C": [
		{
			"className": "Recipe_Pattern_Number1_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number2_C": [
		{
			"className": "Recipe_Pattern_Number2_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number3_C": [
		{
			"className": "Recipe_Pattern_Number3_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number4_C": [
		{
			"className": "Recipe_Pattern_Number4_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number5_C": [
		{
			"className": "Recipe_Pattern_Number5_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number6_C": [
		{
			"className": "Recipe_Pattern_Number6_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number7_C": [
		{
			"className": "Recipe_Pattern_Number7_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number8_C": [
		{
			"className": "Recipe_Pattern_Number8_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Number9_C": [
		{
			"className": "Recipe_Pattern_Number9_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Number Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Cart_C": [
		{
			"className": "Recipe_Pattern_Icon_Cart_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Explorer_C": [
		{
			"className": "Recipe_Pattern_Icon_Explorer_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Parking_C": [
		{
			"className": "Recipe_Pattern_Icon_Parking_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Tractor_C": [
		{
			"className": "Recipe_Pattern_Icon_Tractor_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Truck_C": [
		{
			"className": "Recipe_Pattern_Icon_Truck_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_NO_Cart_C": [
		{
			"className": "Recipe_Pattern_NO_Cart_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_NO_Parking_C": [
		{
			"className": "Recipe_Pattern_NO_Parking_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_FullZebra_C": [
		{
			"className": "Recipe_Pattern_FullZebra_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Transportation Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Factory_C": [
		{
			"className": "Recipe_Pattern_Icon_Factory_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Liquid_C": [
		{
			"className": "Recipe_Pattern_Icon_Liquid_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Nuclear_C": [
		{
			"className": "Recipe_Pattern_Icon_Nuclear_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Pioneer_C": [
		{
			"className": "Recipe_Pattern_Icon_Pioneer_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Power_C": [
		{
			"className": "Recipe_Pattern_Icon_Power_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_StopCross_C": [
		{
			"className": "Recipe_Pattern_Icon_StopCross_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_Icon_Storage_C": [
		{
			"className": "Recipe_Pattern_Icon_Storage_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_NO_Pioneer_C": [
		{
			"className": "Recipe_Pattern_NO_Pioneer_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Factory Icon Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_LineCentre_C": [
		{
			"className": "Recipe_Pattern_LineCentre_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_LineCentreCorner_C": [
		{
			"className": "Recipe_Pattern_LineCentreCorner_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_LineCross_C": [
		{
			"className": "Recipe_Pattern_LineCross_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_LineDouble_C": [
		{
			"className": "Recipe_Pattern_LineDouble_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_LineSide_C": [
		{
			"className": "Recipe_Pattern_LineSide_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_LineSideCorner_C": [
		{
			"className": "Recipe_Pattern_LineSideCorner_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_LineSplit_C": [
		{
			"className": "Recipe_Pattern_LineSplit_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Solid Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_DottedCentre_C": [
		{
			"className": "Recipe_Pattern_DottedCentre_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_DottedCentreCorner_C": [
		{
			"className": "Recipe_Pattern_DottedCentreCorner_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_DottedCross_C": [
		{
			"className": "Recipe_Pattern_DottedCross_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_DottedDouble_C": [
		{
			"className": "Recipe_Pattern_DottedDouble_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_DottedSide_C": [
		{
			"className": "Recipe_Pattern_DottedSide_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_DottedSideCorner_C": [
		{
			"className": "Recipe_Pattern_DottedSideCorner_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_DottedSplit_C": [
		{
			"className": "Recipe_Pattern_DottedSplit_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Dotted Line Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PaintFinish_Copper_C": [
		{
			"className": "Recipe_PaintFinish_Copper_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Copper Paint Finish",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PaintFinish_Chrome_C": [
		{
			"className": "Recipe_PaintFinish_Chrome_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Chrome Paint Finish",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PaintFinish_Caterium_C": [
		{
			"className": "Recipe_PaintFinish_Caterium_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Caterium Paint Finish",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_PaintFinish_CarbonSteel_C": [
		{
			"className": "Recipe_PaintFinish_CarbonSteel_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Carbon Steel FInish",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ArrowBack_C": [
		{
			"className": "Recipe_Pattern_ArrowBack_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ArrowLeft_C": [
		{
			"className": "Recipe_Pattern_ArrowLeft_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ArrowRight_C": [
		{
			"className": "Recipe_Pattern_ArrowRight_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_ArrowStraight_C": [
		{
			"className": "Recipe_Pattern_ArrowStraight_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_NO_ArrowLeft_C": [
		{
			"className": "Recipe_Pattern_NO_ArrowLeft_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_NO_ArrowRight_C": [
		{
			"className": "Recipe_Pattern_NO_ArrowRight_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_Pattern_NO_ArrowStraight_C": [
		{
			"className": "Recipe_Pattern_NO_ArrowStraight_C",
			"name": "N/A",
			"unlockedBy": "[[AWESOME Shop]] - Arrow Patterns",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SkinFicsmas_Premium_C": [
		{
			"className": "Recipe_SkinFicsmas_Premium_C",
			"name": "N/A",
			"unlockedBy": "Customizer: Premium FICSMAS Skin",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_XmasStar_C",
					"amount": 1
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SkinRemover_C": [
		{
			"className": "Recipe_SkinRemover_C",
			"name": "N/A",
			"unlockedBy": "Customizer: Basic FICSMAS Skin OR\u003Cbr\u003ECustomizer: Premium FICSMAS Skin",
			"duration": 0,
			"ingredients": [],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	],
	"Recipe_SkinFicsmas_Default_C": [
		{
			"className": "Recipe_SkinFicsmas_Default_C",
			"name": "N/A",
			"unlockedBy": "Customizer: Basic FICSMAS Skin",
			"duration": 0,
			"ingredients": [
				{
					"item": "Desc_Gift_C",
					"amount": 1
				}
			],
			"products": [],
			"producedIn": [],
			"inCraftBench": false,
			"inWorkshop": false,
			"inBuildGun": false,
			"inCustomizer": true,
			"manualCraftingMultiplier": 0,
			"alternate": false,
			"minPower": null,
			"maxPower": null,
			"seasons": [],
			"stable": true,
			"experimental": true
		}
	]
}







let translations = {
  AluminumPlate: "AlcladAluminumSheet",
  AluminumPlateReinforced: "HeatSink",
  Cement: "Concrete",
  CircuitBoardHighSpeed: "HighSpeedConnector",
  ComputerSuper: "Supercomputer",
  CopperDust: "CopperPowder",
	CrystalShard: "PowerShard",
	DarkMatter: "DarkMatterResidue",
	FicsiteMesh: "FicsiteTrigon",
  GoldIngot: "CateriumIngot",
  Gunpowder: "BlackPowder",
  GunpowderMK2: "SmokelessPowder",
	HighSpeedWire: "Quickwire",
  IronScrew: "Screw",
  LiquidFuel: "Fuel",
  LiquidOil: "CrudeOil",
	ModularFrameFused: "FusedModularFrame",
	ModularFrameHeavy: "HeavyModularFrame",
	ModularFrameLightweight: "RadioControlUnit",
	MotorLightweight: "TurboMotor",
  OreBauxite: "Bauxite",
  OreCopper: "CopperOre",
  OreGold: "Caterium",
  OreIron: "IronOre",
  OreUranium: "UraniumOre",
	QuantumOscillator: "SuperpositionOscillator",
	QuantumEnergy: "ExcitedPhotonicMatter",
  SAMIngot: "ReanimatedSam",
  SAM: "Sam",
  SpaceElevatorPart_1: "SmartPlating",
  SpaceElevatorPart_10: "BiochemicalSculptor",
  SpaceElevatorPart_11: "BallisticWarpDrive",
  SpaceElevatorPart_12: "AIExpansionServer",
  SpaceElevatorPart_2: "VersatileFramework",
  SpaceElevatorPart_3: "AutomatedWiring",
  SpaceElevatorPart_4: "ModularEngine",
  SpaceElevatorPart_5: "AdaptiveControlUnit",
  SpaceElevatorPart_6: "MagneticFieldGenerator",
  SpaceElevatorPart_7: "AssemblyDirectorSystem",
  SpaceElevatorPart_8: "ThermalPropulsionRocket",
  SpaceElevatorPart_9: "NuclearPasta",
  SteelPlateReinforced: "EncasedIndustrialBeam",
  Stone: "Limestone",
	TemporalProcessor: "NeuralQuantumProcessor"
}

let ores = [
  "Bauxite","CopperOre","Caterium","IronOre","UraniumOre","Limestone",
  "Sulfur","RawQuartz","Coal","NitrogenGas","Water","Sam","CrudeOil"
]


function translate(name) {
  let result = name.split("_")[1]
  if (result === "SpaceElevatorPart") {
    result = [result, name.split("_")[2]].join("_")
  }
  return translations[result] || result
}

///////////// NORMAL RECIPES
let recipes = []

ores.forEach((ore) => {
  let recipe = {
    name: ore,
    ingredients: []
  }
  recipes.push(recipe)
})

for (let recipeName in rawRecipes) {
  let sourceRecipe = rawRecipes[recipeName][0]
  if (!sourceRecipe.products[0]) continue
  if (sourceRecipe.inBuildGun) continue
  if (recipeName.match(/Packaged/)) continue
  if (recipeName.match(/Cartridge/)) continue
  if (recipeName.match(/Protein/)) continue
  if (recipeName.match(/Biomass/)) continue
	if (recipeName.match(/PowerCrystalShard/)) continue
	if (recipeName.match(/Nobelisk/)) continue
	if (recipeName.match(/Rebar/)) continue
  if (sourceRecipe.ingredients.length === 1 && sourceRecipe.ingredients[0].item.match(/Packaged/)) continue
  if (sourceRecipe.producedIn.length < 1) continue
  
  let name = translate(sourceRecipe.products[0].item)
  if (name === "SpaceElevaotorPart") {
    debugger
    name = sourceRecipe.name
  }
  let recipe = {
    name: name,
    recipeName: sourceRecipe.name,
    ingredients: []
  }
  if (sourceRecipe.alternate) {
    recipe.altName = sourceRecipe.name
  }
  if (ores.includes(recipe.name)) {
    continue
  }

  let output_quantity = sourceRecipe.products[0].amount
  sourceRecipe.ingredients.forEach((ingredient) => {
    recipe.ingredients.push({
      name: translate(ingredient.item),
      quantity: ingredient.amount / output_quantity
    })
  })
  sourceRecipe.products.slice(1).forEach((product) => {
    recipe.ingredients.push({
      name: translate(product.item),
      quantity: -product.amount / output_quantity
    })
  })
  recipes.push(recipe)
}

recipes = _.sortBy(recipes, 'name')

window.recipes = recipes
console.log({recipes})

export {recipes}
